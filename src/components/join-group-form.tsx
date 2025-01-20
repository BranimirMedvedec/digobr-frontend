import { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { joinGroup } from "@/lib/functions";
import { getUsername } from "@/lib/auth-functions";
import { Button } from "./ui/button";
import { Competition } from "@/models/competition";
import { Group } from "@/models/group";
import { useNavigate } from "react-router-dom";
import {
  setCompetitionLevel,
  setStudentColor,
  setStudentGroup,
} from "@/lib/store-functions";

export default function JoinGroupForm() {
  const navigate = useNavigate();
  const [groupCode, setGroupCode] = useState<string>("");

  async function handleJoinCompetition(e: FormEvent) {
    e.preventDefault();
    try {
      if (!groupCode) {
        alert("Kod grupe je obavezan");
        return;
      }

      const username = getUsername();
      if (!username) {
        alert("Morate biti prijavljeni da biste se pridružili grupi");
        return;
      }

      const data: Competition & {
        group: Group;
      } = await joinGroup(username, groupCode);
      console.log("Joined group " + groupCode + ": ", data);

      setStudentGroup(data.group.code);
      setStudentColor(data.group.colorRgb);
      setCompetitionLevel(1);
      navigate("competition");
    } catch (error) {
      console.log("Error joining group: ", error);
    }
  }

  return (
    <div className="w-1/2 flex flex-col items-left justify-center mx-2">
      <form onSubmit={handleJoinCompetition}>
        <h2 className="font-alumni text-white text-3xl font-semibold uppercase text-left">
          Upiši kod tima
        </h2>

        <Input
          className="w-full bg-white border-0 rounded-xl h-12 text-center text-3xl font-alumni font-semibold shadow-lg"
          value={groupCode}
          onChange={(e) => setGroupCode(e.target.value)}
          required
        />

        <div className="flex items-center justify-start pt-4">
          <Button
            type="submit"
            className="w-3/4 h-12 border-4 border-white rounded-xl text-white uppercase text-3xl font-alumni font-semibold shadow-lg"
          >
            Start
          </Button>
          <img
            src="/frog_2.png"
            alt="Frog"
            className="w-14 h-14 drop-shadow-lg ml-2 animate-bounce"
          />
        </div>
      </form>
    </div>
  );
}
