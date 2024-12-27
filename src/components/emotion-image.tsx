import FrogText from "@/components/frog-text.tsx";

type EmotionImageProps = {
  imageBlur?: boolean;
  text: string;
};

// TODO: use real image from BE
export default function EmotionImage({
  imageBlur = false,
  text,
}: EmotionImageProps) {
  return (
    <>
      <img
        id="frog"
        src="/temporary_image.png"
        alt="Frog"
        className={`${imageBlur && "blur"} rounded-2xl w-3/4 mt-20 mb-2 md:w-1/2 lg:w-1/3`}
      />
      <FrogText text={text} />
    </>
  );
}
