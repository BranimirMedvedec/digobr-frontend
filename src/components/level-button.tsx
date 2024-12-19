import Frog from "@/components/frog.tsx";

type LevelButtonProps = {
  level: number;
  status: string;
};
export default function LevelButton({ level, status }: LevelButtonProps) {
  return (
    <div className="relative">
      <button
        disabled={status !== "ACTIVE"}
        className={`w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center border-[#BCFDC6] border-4
        text-5xl font-bold uppercase text-black drop-shadow-lg font-alumni hover:border-lime-400
        ${status === "ACTIVE" ? "shadow-circle shadow-amber-50 border-2 border-amber-50" : "brightness-50"}`}
      >
        {level}
      </button>
      {status === "PREVIOUS" && <Frog positionCSS="bottom-4 left-2" />}
    </div>
  );
}
