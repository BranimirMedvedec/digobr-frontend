import Frog from "@/components/frog.tsx";
import { getStudentColor } from "@/lib/store-functions.ts";

type LevelButtonProps = {
  level: number;
  status: string;
};
export default function LevelButton({ level, status }: LevelButtonProps) {
  const color = getStudentColor();

  return (
    <div className="relative">
      <button
        disabled={status !== "ACTIVE"}
        className={`w-24 h-24 rounded-full flex items-center justify-center border-[#BCFDC6] border-4
        text-5xl font-bold uppercase text-black drop-shadow-lg font-alumni hover:border-lime-400
        ${
          status === "ACTIVE" || status === "ACTIVE_FROG"
            ? "shadow-circle shadow-amber-50 border-2 border-amber-50"
            : "brightness-50"
        }`}
        style={{
          backgroundColor: color ? color : "gray",
        }}
      >
        {level}
      </button>
      {status === "ACTIVE_FROG" && (
        <Frog positionCSS="absolute bottom-4 left-2" />
      )}
    </div>
  );
}
