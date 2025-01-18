import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Competition } from "@/models/competition";
import { Status } from "@/models/status-enum";
import { useEffect, useState } from "react";
import CompetitionDetails from "./competition-details";
import { getUsername } from "@/lib/auth-functions";
import { getCompetitions } from "@/lib/functions";
import { Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CustomAccordion() {
  const { toast } = useToast();
  const username = getUsername();
  const [competitions, setCompetitions] = useState<Competition[]>([]);

  async function getAllCompetitions() {
    try {
      if (!username) {
        alert("Morate biti prijavljeni da biste pregledali natjecanja");
        return;
      }

      const data: Competition[] = await getCompetitions(username);
      data.sort((a, b) => {
        return (
          new Date(b.startDateTime).getTime() -
          new Date(a.startDateTime).getTime()
        );
      });
      setCompetitions(data);
    } catch (error) {
      console.error("Error getting competitions:", error);
    }
  }

  useEffect(() => {
    getAllCompetitions();
  }, []);

  // Map status to colors
  const statusColors = {
    [Status.NOT_STARTED]: "bg-gray-500", // Gray for not started
    [Status.STARTED]: "bg-green-500", // Green for started
    [Status.FINISHED]: "bg-red-500", // Red for finished
  };

  const legend = `
    Zelena - natjecanje je započelo
    Siva - natjecanje nije započelo
    Crvena - natjecanje je završilo`;

  return (
    <>
      <Accordion type="single" collapsible className="w-full bg-white p-2">
        {competitions.map((competition) => (
          <AccordionItem key={competition.id} value={`item-${competition.id}`}>
            <AccordionTrigger className="flex justify-between items-center px-5">
              <div className="flex items-center space-x-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    statusColors[competition.status]
                  }`}
                ></span>
                <span className="font-semibold">{competition.name}</span>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(competition.startDateTime).toLocaleDateString(
                  "hr-HR"
                )}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <CompetitionDetails competitionId={competition.id} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Info
        className="w-8 h-8 text-white absolute bottom-4 right-4"
        onClick={() => {
          toast({
            title: "Legenda",
            description: <pre>{legend}</pre>,
            className: "bg-black text-white border-1 rounded-xl",
          });
        }}
      />
    </>
  );
}
