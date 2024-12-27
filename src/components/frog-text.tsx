import Frog from "@/components/frog.tsx";

type FrogTextProps = {
  text: string;
};

export default function FrogText({ text }: FrogTextProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <Frog />
      <p className="animate-pulse font-hammersmith font-medium text-xl text-start uppercase w-32 ml-2">
        {text}
      </p>
    </div>
  );
}
