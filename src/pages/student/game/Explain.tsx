import GameFrame from "@/components/game-frame.tsx";
import { useEffect, useState } from "react";
import FrogText from "@/components/frog-text.tsx";
import EmotionImage from "@/components/emotion-image.tsx";
import {
  notifyStartGuessing,
  subscribeToEvent,
  unsubscribeFromEvent,
} from "@/lib/socket-functions.ts";
import { getCompetitionLevel, getStudentGroup } from "@/lib/store-functions.ts";
import { useNavigate } from "react-router-dom";

export default function Explain() {
  // TODO: set right timers and extract them into separate file
  const GET_READY_TIMER = 5; /* time for the explainer to learn new emotion */
  const EXPLAIN_TIMER = 8; /* time for the explainer to imitate new emotion */

  const navigate = useNavigate();
  const level = getCompetitionLevel() || 1;

  const [showCounter, setShowCounter] = useState(true);
  const [timer, setTimer] = useState<number>(() => {
    const initialTimer = GET_READY_TIMER;
    setTimeout(() => {
      setTimer(EXPLAIN_TIMER);
    }, GET_READY_TIMER * 1000);

    setTimeout(() => {
      const groupCode = getStudentGroup();
      if (groupCode) notifyStartGuessing(groupCode); // after explaining, notify others to start guessing
      setShowCounter(false);
      setTimer(0);
    }, (GET_READY_TIMER + EXPLAIN_TIMER) * 1000);

    return initialTimer;
  });

  useEffect(() => {
    subscribeToEvent("guessingOver", () => {
      console.log("Guessing over");
      navigate("/student/competition/results");
    });

    return () => {
      unsubscribeFromEvent("guessingOver");
    };
  }, []);

  return (
    <GameFrame level={level} counter={timer} showCounter={showCounter}>
      {() => {
        switch (timer) {
          case GET_READY_TIMER:
            return <EmotionImage text="pripremi se!" />;

          case EXPLAIN_TIMER:
            return <EmotionImage imageBlur text="oponašaj emociju!" />;

          case 0:
            return (
              <div className="mt-[50%] md:mt-[20%]">
                <FrogText text={"bravo! sada igraju tvoji prijatelji!"} />
              </div>
            );

          default:
            return <></>;
        }
      }}
    </GameFrame>
  );
}
