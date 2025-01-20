import { Dispatch, SetStateAction, useEffect } from "react";

type CounterProps = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  initialValue: number;
  intervalMs?: number;
};

export default function Counter({
  value,
  setValue,
  initialValue,
  intervalMs = 1000,
}: CounterProps) {
  useEffect(() => {
    /* reset the counter when initialValue changes */
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev > 0 ? prev - 1 : 0));
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  const filledDots = Math.round((value / 12) * 12);

  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      <div className="absolute text-4xl font-bold">{value}</div>

      <div className="relative flex items-center justify-center w-full h-full">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * 360;
          const isFilled = i < filledDots;

          return (
            <div
              key={i}
              style={{
                transform: `rotate(${angle}deg) translate(40px) rotate(-${angle}deg)`,
              }}
              className={`absolute w-3 h-3 rounded-full ${
                isFilled ? "bg-orange-500" : "bg-gray-800"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
