type TeamColorProps = {
  colorHEX: string;
  positionCSS?: string;
};

export default function TeamColor({ colorHEX, positionCSS }: TeamColorProps) {
  return (
    <div
      className={`${positionCSS} bg-[#FFFB00] h-[10vh] w-full`}
      style={{ backgroundColor: colorHEX }}
    ></div>
  );
}
