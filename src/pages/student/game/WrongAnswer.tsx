import FrogText from "@/components/frog-text.tsx";
import { formatImage } from "@/lib/functions";
import { getCompetitionLevel, getQuestionData } from "@/lib/store-functions";
import { Translations as T } from "@/lib/translations";
import { useLocation, useNavigate } from "react-router-dom";
import GameFrame from "@/components/game-frame.tsx";
import { useEffect } from "react";

export default function WrongAnswer() {
  // TODO extract in separate file
  const SHOW_ANSWER_RESULTS = 5;

  const navigate = useNavigate();
  const level = getCompetitionLevel() || 1;
  const location = useLocation();
  const index = location.state.index;
  const data = getQuestionData();
  const correctAnswer = data?.guessingImages?.find(
    (image) => image.isCorrectAnswer
  );
  const emotionName = correctAnswer?.emotionName;
  const translatedCorrectEmotion =
    emotionName && emotionName in T
      ? T[emotionName as keyof typeof T]
      : "Unknown emotion";
  const selectedImage = data?.guessingImages?.[index];
  const selectedEmotionName = selectedImage?.emotionName;
  const translatedSelectedEmotion =
    selectedEmotionName && selectedEmotionName in T
      ? T[selectedEmotionName as keyof typeof T]
      : "Unknown emotion";

  useEffect(() => {
    setTimeout(() => {
      navigate("/student/competition/results");
    }, SHOW_ANSWER_RESULTS * 1000);
  }, []);

  return (
    <GameFrame level={level} counter={0} showCounter={false}>
      {() => (
        <div className="grid grid-rows-3 grid-cols-2 p-12 sm:w-1/2 lg:w-1/3">
          <div className="flex flex-col items-start justify-start">
            <p className="text-xl sm:text-3xl font-bold uppercase text-[#ADABAB] font-alumni">
              netočno:
            </p>
            <p className="text-3xl sm:text-6xl font-bold uppercase text-[#FF0404] font-alumni">
              {translatedSelectedEmotion}
            </p>
          </div>
          <img
            id="frog-4"
            src={formatImage(selectedImage?.data)}
            alt="A frog"
            className="rounded-3xl border-8 border-[#FF0404]"
          />
          <div className="flex flex-col items-start justify-start mt-3">
            <p className="text-xl sm:text-3xl font-bold uppercase text-[#ADABAB] font-alumni">
              točno:
            </p>
            <p className="text-3xl sm:text-6xl font-bold uppercase text-[#00FF1A] font-alumni">
              {translatedCorrectEmotion}
            </p>
          </div>
          <img
            id="frog-4"
            src={formatImage(correctAnswer?.data)}
            alt="A frog"
            className="rounded-3xl border-8 border-[#00FF1A] mt-3"
          />
          <div className="col-span-2 mt-12">
            <FrogText text={"nova emocija: " + translatedCorrectEmotion} />
          </div>
        </div>
      )}
    </GameFrame>
  );
}
