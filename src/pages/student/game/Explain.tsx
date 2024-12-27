import GameFrame from "@/components/game-frame.tsx";
import { useState } from "react";
import FrogText from "@/components/frog-text.tsx";
import RoundResults from "@/pages/student/game/RoundResults.tsx";
import EmotionImage from "@/components/emotion-image.tsx";

export default function Explain() {
  // TODO: set right timers and extract them into separate file
  const GET_READY_TIMER = 10; /* time for the explainer to learn new emotion */
  const EXPLAIN_TIMER = 15; /* time for the explainer to imitate new emotion */
  const FRIENDS_GUESSING = 12; /* time for the rest of the team to guess the explained emotion - explainer waits*/
  const RESULTS_TIMER = 7; /* show current round results */

  const [showCounter, setShowCounter] = useState(true);
  const [timer, setTimer] = useState<number>(() => {
    const initialTimer = GET_READY_TIMER;
    setTimeout(() => {
      setTimer(EXPLAIN_TIMER);
    }, GET_READY_TIMER * 1000);

    setTimeout(
      () => {
        setTimer(FRIENDS_GUESSING);
      },
      (GET_READY_TIMER + EXPLAIN_TIMER) * 1000,
    );

    setTimeout(
      () => {
        setShowCounter(false);
        setTimer(RESULTS_TIMER);
      },
      (GET_READY_TIMER + EXPLAIN_TIMER + FRIENDS_GUESSING) * 1000,
    );

    return initialTimer;
  });

  return (
    <GameFrame level={1} counter={timer} showCounter={showCounter}>
      {(() => {
        switch (timer) {
          case GET_READY_TIMER:
            return <EmotionImage text="pripremi se!" />;

          case EXPLAIN_TIMER:
            return <EmotionImage imageBlur text="oponašaj emociju!" />;

          case FRIENDS_GUESSING:
            return (
              <div className="mt-[50%] md:mt-[20%]">
                <FrogText text={"bravo! sada igraju tvoji prijatelji!"} />
              </div>
            );

          case RESULTS_TIMER:
            return <RoundResults />;

          default:
            return <></>;
        }
      })()}
    </GameFrame>
  );
}
