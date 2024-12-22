import TeamColor from "@/components/team-color.tsx";
import Frog from "@/components/frog.tsx";

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
      <div className="flex items-center justify-center h-full w-full">
        <Frog />
        <p className="font-hammersmith font-medium text-xl text-start uppercase w-32 ml-2">
          čekamo cijelu ekipu!
        </p>
      </div>
    </div>
  );
}
