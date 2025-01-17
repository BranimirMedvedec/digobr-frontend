import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { startCompetition } from "@/lib/functions";
import { useNavigate } from "react-router-dom";

type StartCompetitionButtonProps = {
  username: string;
  id: number;
  competitionName: string;
};

export default function StartCompetitionButton({
  username,
  id,
  competitionName,
}: StartCompetitionButtonProps) {
  const navigate = useNavigate();
  async function handleStartCompetition() {
    try {
      if (!username) {
        alert("Morate biti prijavljeni da biste pokrenuli natjecanje");
        return;
      }

      if (id == 0) {
        alert("Nemoguće pokrenuti natjecanje bez validnog ID-a");
        return;
      }

      await startCompetition(username, id);
      navigate(`/teacher/competition/${id}/${competitionName}`);
    } catch (error) {
      console.log("Error starting competition: ", error);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="h-12 border-4 border-white rounded-xl text-white uppercase text-3xl font-alumni font-semibold shadow-lg">
          Pokreni
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-gradient-to-b to-[hsla(113,96%,81%,1)] from-[hsla(188,90%,51%,1)] text-black rounded-xl w-3/4">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Jeste li sigurni da želite pokrenuti natjecanje?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Učenici neće moći uću u grupe nakon što natjecanje počne!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-white text-black font-hammersmith font-medium text-lg rounded-xl border-2 border-white p-5 shadow-lg">
            Odustani
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleStartCompetition}
            className="bg-fuchsia-400 text-black font-hammersmith font-medium text-lg rounded-xl border-2 border-white p-5 shadow-lg"
          >
            Nastavi
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
