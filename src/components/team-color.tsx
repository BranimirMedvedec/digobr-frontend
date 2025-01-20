import { getStudentColor } from "@/lib/store-functions.ts";

type TeamColorProps = {
  positionCSS?: string;
};

export default function TeamColor({ positionCSS }: TeamColorProps) {
  const color = getStudentColor();
  return (
    <div
      className={`${positionCSS} bg-[#FFFB00] h-[10vh] w-full`}
      style={{
        backgroundColor: color ? color : "gray",
      }}
    ></div>
  );
}
