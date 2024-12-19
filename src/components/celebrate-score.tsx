type CelebrateScoreProps = {
    score: number;
};

export default function CelebrateScore({ score }: CelebrateScoreProps) {

    return (
        <div className="absolute top-32 lg:top-64 w-full h-40 my-10">
            <div className="flex flex-col justify-center items-center h-40 w-full">
                <p className={`relative border-[7px] border-[#FFFB00] p-4 rounded-xl text-4xl font-bold uppercase text-black font-alumni
                transition-opacity duration-2000`}>
                    BODOVI: {score}
                    <img
                        src="/celebrate.png"
                        alt="Celebrate"
                        className="absolute -bottom-1/2 -left-12 h-24"
                    />
                    <img
                        src="/celebrate.png"
                        alt="Celebrate"
                        className="absolute -bottom-1/2 -right-12 h-24 scale-x-[-1]"
                    />
                </p>
            </div>
        </div>
    )
}