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
      <div className="w-full h-[90vh] flex flex-col items-center justify-start overflow-hidden">
          <p className="ml-2 text-4xl test-start font-bold uppercase text-slate-200 font-alumni w-full">
            LEVEL {level}
          </p>
          <div className="relative flex flex-col items-center justify-between h-full w-screen">
            {children}
            {showCounter && (
              <div className="absolute bottom-4 right-4">
                <Counter initialValue={counter} />
              </div>
            )}
          </div>
      </div>
    </div>
  );
}
