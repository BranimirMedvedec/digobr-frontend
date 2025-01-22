import FrogText from "@/components/frog-text.tsx";
import GameFrame from "@/components/game-frame";
import { formatImage, getGroupLevelScore } from "@/lib/functions";
import {
  getQuestionData,
  getStudentGroup,
  setCompetitionLevel,
} from "@/lib/store-functions";

import { Translations as T } from "@/lib/translations";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoundResults() {
  // TODO extract in separate file
  const SHOW_ROUND_RESULTS = 5;

  const navigate = useNavigate();

  const data = getQuestionData();
  const imitationImage = data?.imitationImage?.data;
  const guessingImage = data?.guessingImages?.find(
    (image) => image.emotionName === data?.imitationImage?.emotionName
  )?.data;
  const emotionName = data?.imitationImage?.emotionName;
  const translatedEmotion =
    emotionName && emotionName in T
      ? T[emotionName as keyof typeof T]
      : "Unknown emotion";
  const groupCode = getStudentGroup();
  const level = data?.level || 1;
  const [score, setScore] = useState<number>(0);

  async function handleGetGroupLevelScore() {
    try {
      if (!groupCode || !level) {
        console.error("Group code or level is missing");
        return;
      }

      const response = await getGroupLevelScore(groupCode, level);
      setScore(response);
    } catch (error) {
      console.error("Error getting score:", error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (data && !data.isFinalGameRound && !data.isFinalLevelRound) {
        // go to the next round of the same level
        navigate("/student/competition", {
          state: { waitGameRound: true },
        });
      } else if (data && (data.isFinalGameRound || data.isFinalLevelRound)) {
        setCompetitionLevel(data.level + 1); // update level
        navigate("/student/competition"); // go to the next level (start with the level roadmap) or game end
      }
    }, SHOW_ROUND_RESULTS * 1000);
    handleGetGroupLevelScore();
  }, []);

  return (
    <GameFrame level={level} counter={0} showCounter={false}>
      {() => (
        <div className="flex flex-col items-center justify-start py-12 h-screen">
          <div className="grid grid-cols-2 grid-rows-4 justify-items-center px-5 gap-4 mb-6 w-screen md:w-2/3">
            <img
              id="emotion-image"
              src={formatImage(guessingImage)}
              alt="Emotion Image 1"
              className="row-span-2 rounded-2xl md:w-[30vw]"
            />
            <img
              id="emotion-image"
              src={formatImage(imitationImage)}
              alt="Emotion Image 2"
              className="row-span-2 rounded-2xl md:w-[30vw]"
            />
            <p className="col-span-2 text-center text-3xl font-bold uppercase text-gray-400 font-alumni">
              {translatedEmotion}
            </p>
            <p className="col-span-2 self-center text-center border-[7px] border-[#FFFB00] py-3 px-6 mx-12 rounded-xl text-4xl font-bold uppercase text-black font-alumni">
              BODOVI: {score}
            </p>
          </div>
          <FrogText text={"naučili smo novu emociju!"} />
        </div>
      )}
    </GameFrame>
  );
}
