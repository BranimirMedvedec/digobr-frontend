import TeamColor from "@/components/team-color.tsx";
import Counter from "@/components/counter.tsx";
import { PropsWithChildren } from "react";

type GameFrameProps = PropsWithChildren<{
  level: number;
  counter: number;
  showCounter: boolean;
}>;

export default function GameFrame({
  level,
  counter,
  showCounter,
  children,
}: GameFrameProps) {
  return (
    <div className="flex flex-col items-start justify-start w-full h-screen bg-white">
      <TeamColor colorHEX="#FFFB00" />
      <p className="ml-2 text-4xl font-bold uppercase text-slate-200 font-alumni">
        LEVEL {level}
      </p>
      <div className="flex flex-col items-center justify-between h-full w-full">
        {children}
        {showCounter && (
          <div className="flex items-center justify-end w-full p-4">
            <Counter initialValue={counter} />
          </div>
        )}
      </div>
    </div>
  );
}
