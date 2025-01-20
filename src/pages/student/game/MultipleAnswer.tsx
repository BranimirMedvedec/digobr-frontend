import FrogText from "@/components/frog-text.tsx";
import { getUsername } from "@/lib/auth-functions";
import { formatImage, giveAnswer } from "@/lib/functions";
import { getQuestionData, getStudentGroup } from "@/lib/store-functions";
import { Answer } from "@/models/answer";
import { useNavigate } from "react-router-dom";

type MultipleAnswerProps = {
  counterValue: number;
  answerTime: number;
};

export default function MultipleAnswer({
  counterValue,
  answerTime,
}: MultipleAnswerProps) {
  const username = getUsername();
  const groupCode = getStudentGroup();
  const navigate = useNavigate();
  const data = getQuestionData();
  const images = data?.guessingImages;
  const formattedImages = images?.map((image) => {
    return {
      data: formatImage(image.data),
    };
  });

  // TODO: add logic for answering the question

  const handleAnswer = (index: number) => async () => {
    console.log("Answered:", index);
    const selectedImage = images?.[index];

    try {
      const correctEmotionId = images?.find(
        (image) => image.isCorrectAnswer
      )?.emotionId;
      const answerBody: Answer = {
        correctEmotionId: correctEmotionId ?? 0,
        imitatorUserId: data?.imitatorId ?? 0,
        isAnswerCorrect: selectedImage?.isCorrectAnswer ?? false,
        percentageOfTimeLeft: counterValue / answerTime,
      };

      if (!username || !groupCode) {
        alert("Morate biti prijavljeni da biste sudjelovali u natjecanju");
        return;
      }

      await giveAnswer(username, groupCode, answerBody);

      if (selectedImage?.isCorrectAnswer) {
        navigate("correct-answer");
      } else {
        navigate("wrong-answer", { state: { index } });
      }
    } catch (error) {
      console.error("Error requesting emotion:", error);
    }

    if (selectedImage?.isCorrectAnswer) {
      console.log("Correct answer!");
    }
  };

  return (
    <div className="mt-10 flex flex-col items-center gap-10 sm:w-1/2 md:w-1/3">
      <div className="grid grid-rows-2 grid-cols-2 gap-4 px-4 w-full">
        {formattedImages &&
          formattedImages.map((image, index) => (
            <img
              key={index}
              onClick={handleAnswer(index)}
              src={image.data}
              alt="A frog"
              className="rounded-3xl w-full h-auto"
            />
          ))}
      </div>

      <FrogText text={"odaberi emociju!"} />
    </div>
  );
}
