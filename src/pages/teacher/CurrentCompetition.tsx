import Title from "@/components/title.tsx";
import LeaderboardColumn from "@/components/leaderboard-column.tsx";
import LeaderboardRow from "@/components/leaderboard-row.tsx";
import { Group, GroupWithPlace } from "@/models/group.ts";
import { useEffect, useState } from "react";
import { getCompetition } from "@/lib/functions.ts";
import { getUsername } from "@/lib/auth-functions.ts";
import { useParams } from "react-router-dom";

export default function CurrentCompetition() {
  const { id, name } = useParams();
  const [groups, setGroups] = useState<Group[]>();
  const [firstThreeGroups, setFirstThreeGroups] = useState<GroupWithPlace[]>();

  useEffect(() => {
    const username = getUsername();
    if (!username) {
      alert("Morate biti prijavljeni da biste kreirali natjecanje");
      return;
    }

    getCompetition(username, Number(id))
      .then((groups) => {
        const sortedGroups = groups.sort((a, b) => b.score - a.score);
        setGroups(sortedGroups);
        setFirstThreeGroups([
          { ...sortedGroups[1], place: 2 },
          { ...sortedGroups[0], place: 1 },
          { ...sortedGroups[2], place: 3 },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching current competition groups.", error);
      });
  }, []);

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-start">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:pl-6 md:pr-10">
        <Title showSmallTitle={true} showFrog={false} />
        <p className="uppercase font-bold text-[#9775FF] font-alumni text-3xl">
          {name}
        </p>
      </div>
      <div className="w-full px-10 flex flex-col md:flex-row gap-5">
        <div className="flex items-end gap-2 md:gap-4 h-[47vh] mt-10 md:mt-0 md:h-[78vh] w-full md:w-2/3">
          {firstThreeGroups?.map((group: GroupWithPlace, index) => (
            <LeaderboardColumn key={index} {...group} /> // Spread the group object directly
          ))}
        </div>
        <div className="flex flex-col h-[78vh] md:overflow-scroll w-full md:w-1/3 gap-2 mb-20 md:mb-0">
          {groups?.slice(3).map((group, index) => (
            <LeaderboardRow key={group.code} place={index + 4} {...group} />
          ))}
        </div>
      </div>
    </div>
  );
}
