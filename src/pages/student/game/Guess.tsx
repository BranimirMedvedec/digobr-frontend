import GameFrame from "@/components/game-frame.tsx";
import { useState } from "react";
import FrogText from "@/components/frog-text.tsx";

export default function Guess() {
  // TODO: set right timers and extract them into separate file
  const GET_READY_TIMER = 10; /* time for the explainer to learn new emotion */
  const EXPLAIN_TIMER = 15; /* time for the explainer to imitate new emotion */

  const [timer, setTimer] = useState<number>(() => {
    const initialTimer = GET_READY_TIMER;
    setTimeout(() => {
      setTimer(EXPLAIN_TIMER);
    }, GET_READY_TIMER * 1000);

    return initialTimer;
  });

  return (
    <GameFrame level={1} counter={timer} showCounter={true}>
      {(() => {
        switch (timer) {
          case GET_READY_TIMER:
            return (
              <div className="mt-[50%] md:mt-[20%]">
                <FrogText text={"tvoj prijatelj uči emociju!"} />
              </div>
            );

          case EXPLAIN_TIMER:
            return (
              <div className="mt-[50%] md:mt-[20%]">
                <p className="text-center my-8 text-5xl font-bold uppercase text-slate-400 font-alumni">
                  gledaj u prijatelja!
                </p>
                <FrogText text={"prijatelj i tebe uči emociju!"} />
              </div>
            );

          default:
            return <></>;
        }
      })()}
    </GameFrame>
  );
}
