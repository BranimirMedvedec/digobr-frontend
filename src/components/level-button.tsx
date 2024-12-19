import Frog from "@/components/frog.tsx";

type LevelButtonProps = {
  level: number;
  status: string;
};
export default function LevelButton({ level, status }: LevelButtonProps) {
  return (
    <div className="relative">
      <button
        className={`w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center border-[#BCFDC6] border-4
      text-5xl font-bold uppercase text-black drop-shadow-lg font-alumni 
      ${status !== "ACTIVE" && "brightness-50"} hover:border-lime-400`}
        disabled={status !== "ACTIVE"}
      >
        {level}
      </button>
      {status === "PREVIOUS" && <Frog positionCSS="bottom-4 left-2" />}
    </div>
  );
}
