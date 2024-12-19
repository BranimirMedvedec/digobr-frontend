type TeamColorProps = {
    colorHEX: string;
}

export default function TeamColor({ colorHEX }: TeamColorProps) {
    return (
        <div
            className="absolute bg-[#FFFB00] h-1/6 w-full lg:rounded-b-3xl"
            style={{ backgroundColor: colorHEX }}>
        </div>
    );
}