import FrogText from "@/components/frog-text.tsx";

export default function WrongAnswer() {

    return (
        <div className="grid grid-rows-3 grid-cols-2 p-12 sm:w-1/2 lg:w-1/3">
            <div className="flex flex-col items-start justify-start">
                <p className="text-3xl font-bold uppercase text-[#ADABAB] font-alumni">
                    netočno:
                </p>
                <p className="text-6xl font-bold uppercase text-[#FF0404] font-alumni">
                    sreća
                </p>
            </div>
            <img
                id="frog-4"
                src="/temporary_image.png"
                alt="A frog"
                className="rounded-3xl border-8 border-[#FF0404]"
            />
            <div className="flex flex-col items-start justify-start mt-3">
                <p className="text-3xl font-bold uppercase text-[#ADABAB] font-alumni">
                    točno:
                </p>
                <p className="text-6xl font-bold uppercase text-[#00FF1A] font-alumni">
                    tuga
                </p>
            </div>
            <img
                id="frog-4"
                src="/temporary_image.png"
                alt="A frog"
                className="rounded-3xl border-8 border-[#00FF1A] mt-3"
            />
            <div className="col-span-2 mt-12">
                <FrogText text={"nova emocija: tuga"}/>
            </div>
        </div>
    );
}