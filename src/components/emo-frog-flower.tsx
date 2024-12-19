import { useEffect, useRef, useState } from "react";

type EmoFrogFlowerProps = {
  animateFrogs: boolean;
};

export default function EmoFrogFlower({ animateFrogs }: EmoFrogFlowerProps) {
  const frogsRef = useRef<HTMLImageElement | null>(null);
  const [centerXTranslate, setCenterXTranslate] = useState<number>(0);

  useEffect(() => {
    if (frogsRef.current) {
      const parentWidth = frogsRef.current.parentElement?.offsetWidth || 0;
      setCenterXTranslate(parentWidth / 2 - frogsRef.current.offsetWidth / 2);
    }
  }, [frogsRef]);

  return (
    <div
      id="emoFrogs"
      ref={frogsRef}
      style={{
        transform: animateFrogs
          ? `translateX(${centerXTranslate}px) translateY(24rem)`
          : "none",
      }}
      className={`w-48 relative h-1/6 transition-transform duration-2000`}
    >
      <h1
        className={`absolute bottom-3 left-16 text-8xl font-bold uppercase text-white drop-shadow-lg font-alumni
            transition-opacity duration-2000 ${animateFrogs ? "opacity-0" : "opacity-100"}`}
      >
        EMO
      </h1>
      <img
        src="/frog_2.png"
        alt="Title Frog"
        className="absolute bottom-0 h-20"
      />
      <img
        src="/frog_2.png"
        alt="Title Frog"
        className={`absolute bottom-0 left-28 h-20 transition-opacity duration-2000 ${
          animateFrogs ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src="/flower.png"
        alt="Title Flower"
        className="absolute -bottom-4 left-24 transform -translate-x-1/2 w-16"
      />
    </div>
  );
}
