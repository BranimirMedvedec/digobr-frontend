import FrogText from "@/components/frog-text.tsx";
import { formatImage } from "@/lib/functions";
import { getQuestionData } from "@/lib/store-functions";

type EmotionImageProps = {
  imageBlur?: boolean;
  text: string;
};

export default function EmotionImage({
  imageBlur = false,
  text,
}: EmotionImageProps) {
  const data = getQuestionData();
  const image = data?.imitationImage?.data;

  return (
    image && (
      <>
        <img
          id="emotion-image"
          src={formatImage(image)}
          alt="emotion-image"
          className={`${
            imageBlur && "blur"
          } rounded-2xl w-3/4 mt-20 sm:mt-10 mb-6 sm:w-96`}
        />
        <FrogText text={text} />
      </>
    )
  );
}
