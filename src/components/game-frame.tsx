import TeamColor from "@/components/team-color.tsx";
import Counter from "@/components/counter.tsx";
import { ReactNode, useState } from "react";

type GameFrameProps = {
  level: number;
  counter: number;
  showCounter: boolean;
  children: (currentCounter: number) => ReactNode;
};

export default function GameFrame({
  level,
  counter,
  showCounter,
  children,
}: GameFrameProps) {
  const [counterValue, setCounterValue] = useState(counter);

  return (
    <div className="flex flex-col items-start justify-start w-full h-screen bg-white">
      <TeamColor />
      <div className="w-full h-[90vh] flex flex-col items-center justify-start overflow-hidden">
        <p className="ml-2 text-4xl test-start font-bold uppercase text-slate-200 font-alumni w-full">
          LEVEL {level}
        </p>
        <div className="relative flex flex-col items-center justify-start h-full w-screen">
          {children(counterValue)}
          {showCounter && (
            <div className="absolute bottom-4 right-4">
              <Counter
                value={counterValue}
                setValue={setCounterValue}
                initialValue={counter}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
