import GameFrame from "@/components/game-frame.tsx";
import { useState } from "react";
import FrogText from "@/components/frog-text.tsx";
import WrongAnswer from "@/pages/student/game/WrongAnswer.tsx";
import RoundResults from "@/pages/student/game/RoundResults.tsx";
import MultipleAnswer from "@/pages/student/game/MultipleAnswer.tsx";

export default function Guess() {
  // TODO: set right timers and extract them into separate file
  const GET_READY_TIMER = 2; /* 10 time for the explainer to learn new emotion */
  const EXPLAIN_TIMER = 2; /* 12 time for the explainer to imitate new emotion */
  const ANSWER_TIMER = 100; /* 45 time for the guesser to choose their answer */
  const CORRECT_ANSWER_TIMER = 8; /* 8 time to look at the answer results */
  const RESULTS_TIMER = 7; /* 7 show current round results */

  const [showCounter, setShowCounter] = useState(true);
  const [timer, setTimer] = useState<number>(() => {
    const initialTimer = GET_READY_TIMER;

    setTimeout(() => {
      setTimer(EXPLAIN_TIMER);
    }, GET_READY_TIMER * 1000);

    setTimeout(() => {
      setTimer(ANSWER_TIMER);
    }, (GET_READY_TIMER + EXPLAIN_TIMER) * 1000);

    setTimeout(() => {
      setShowCounter(false);
      setTimer(CORRECT_ANSWER_TIMER);
    }, (GET_READY_TIMER + EXPLAIN_TIMER + ANSWER_TIMER) * 1000);

    setTimeout(() => {
      setShowCounter(false);
      setTimer(RESULTS_TIMER);
    }, (GET_READY_TIMER + EXPLAIN_TIMER + ANSWER_TIMER + CORRECT_ANSWER_TIMER) * 1000);

    return initialTimer;
  });

  return (
    <GameFrame level={1} counter={timer} showCounter={showCounter}>
      {(counterValue) => {
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

          case ANSWER_TIMER:
            return (
              <MultipleAnswer
                counterValue={counterValue}
                answerTime={ANSWER_TIMER}
              />
            );

          case CORRECT_ANSWER_TIMER:
            return <WrongAnswer />;

          case RESULTS_TIMER:
            return <RoundResults />;

          default:
            return <></>;
        }
      }}
    </GameFrame>
  );
}
