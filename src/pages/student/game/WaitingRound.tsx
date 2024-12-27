import TeamColor from "@/components/team-color.tsx";
import FrogText from "@/components/frog-text.tsx";

type WaitingRoundProps = {
  level: number;
};

export default function WaitingRound({ level }: WaitingRoundProps) {
  return (
    <div className="flex flex-col items-start justify-start w-full h-screen">
      <TeamColor colorHEX="#FFFB00" />
      <p className="ml-2 text-4xl font-bold uppercase text-amber-50 font-alumni">
        LEVEL {level}
      </p>
      <div className="mt-[50%] md:mt-[20%] w-full">
        <FrogText text={"čekamo cijelu ekipu!"} />
      </div>
    </div>
  );
}
