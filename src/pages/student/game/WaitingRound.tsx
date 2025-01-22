import TeamColor from "@/components/team-color.tsx";
import FrogText from "@/components/frog-text.tsx";
import { useEffect } from "react";
import { subscribeToEvent, unsubscribeFromEvent } from "@/lib/socket-functions";
import { useToast } from "@/hooks/use-toast";
import { registerReadiness, requestEmotion } from "@/lib/functions";
import { getStudentGroup, setQuestionData } from "@/lib/store-functions";
import { getUsername } from "@/lib/auth-functions";
import { Emotion } from "@/models/emotion";
import { QuestionInfo } from "@/models/question-info";
import { useNavigate } from "react-router-dom";

type WaitingRoundProps = {
  level: number;
  isCompetitionStart: boolean;
};

type CompetitionStartingData = Emotion & {
  imitationImage: QuestionInfo;
} & {
  guessingImages: QuestionInfo[] | null;
};

export default function WaitingRound({
  level,
  isCompetitionStart,
}: WaitingRoundProps) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const username = getUsername();
  const groupCode = getStudentGroup();

	async function handleCompetitionStarting() {
		try {
			if (!username || !groupCode) {
				toast({
					title: "Morate biti prijavljeni da biste vidjeli aktivno natjecanje.",
					variant: "destructive",
					className: "bg-black text-white border-1 rounded-xl",
					duration: 2500,
				})
				return
			}

      const data: CompetitionStartingData = await requestEmotion(
        username,
        groupCode
      );
      console.log("Requested emotion:", data);
      setQuestionData(data);

      if (data.isImitating) {
        toast({
          title: "tvoj je red da imitiras sliku!",
          className: "bg-black text-white border-1 rounded-xl",
        });
        navigate("explain", { state: { data } });
      } else {
        toast({
          title: "tvoj prijatelj imitira sliku, gledaj i pogađaj!",
          className: "bg-black text-white border-1 rounded-xl",
        });
        navigate("guess");
      }
    } catch (error) {
      console.error("Error requesting emotion:", error);
    }
  }

  useEffect(() => {
    if (!isCompetitionStart && username && groupCode) {
      registerReadiness(username, groupCode);
    }
    subscribeToEvent("competitionStarted", () => {
      console.log("Competition started");
      handleCompetitionStarting();
    });

    return () => {
      unsubscribeFromEvent("competitionStarted");
    };
  }, []);

  return (
    <div className="flex flex-col items-start justify-start w-full h-screen">
      <TeamColor />
      <p className="ml-2 text-4xl font-bold uppercase text-amber-50 font-alumni">
        LEVEL {level}
      </p>
      <div className="mt-[50%] md:mt-[20%] w-full">
        <FrogText text={"čekamo cijelu ekipu!"} />
      </div>
    </div>
  );
}
