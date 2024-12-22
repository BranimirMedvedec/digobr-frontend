type TeamColorProps = {
  colorHEX: string;
  positionCSS?: string;
};

export default function TeamColor({ colorHEX, positionCSS }: TeamColorProps) {
  return (
    <div
      className={`${positionCSS} bg-[#FFFB00] h-1/6 w-full md:rounded-b-3xl`}
      style={{ backgroundColor: colorHEX }}
    ></div>
  );
}
