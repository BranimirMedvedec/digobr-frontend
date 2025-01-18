import CreateCompetitionForm from "@/components/create-competition-form";
import GroupsDisplay from "@/components/groups-display";
import StartCompetitionButton from "@/components/start-competition-button";
import Title from "@/components/title";
import { getUsername } from "@/lib/auth-functions";
import { Group } from "@/models/group";
import { useState } from "react";

export default function CreateCompetition() {
  const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [groups, setGroups] = useState<Group[]>([]);
  const username = getUsername();

  const handleCompetitionCreated = (
    id: number,
    name: string,
    data: Group[]
  ) => {
    setId(id);
    setName(name);
    setGroups(data);
  };

  return (
    <div className="sm:w-1/2 md:w-2/3 lg:w-1/3 sm:m-auto min-h-screen pb-5">
      <Title showSmallTitle={true} showFrog={true} />

      <div className="m-6">
        <CreateCompetitionForm
          onCompetitionCreated={handleCompetitionCreated}
        />
      </div>

      {username && groups.length > 0 && (
        <div className="m-6 border-4 border-white rounded-xl p-4">
          <GroupsDisplay competitionName={name} groups={groups} />

          <div className="flex justify-end">
            <StartCompetitionButton
              username={username}
              id={id}
              competitionName={name}
            />
          </div>
        </div>
      )}
    </div>
  );
}
