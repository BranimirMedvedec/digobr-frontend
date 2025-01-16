import FrogText from "@/components/frog-text.tsx";

export default function CorrectAnswer() {

    return (
        <div className="flex flex-col items-center justify-start p-12 sm:w-1/2 md:w-1/3">
            <img
                id="frog-4"
                src="/temporary_image.png"
                alt="A frog"
                className="rounded-3xl border-8 border-[#00FF1A]"
            />
            <p className="text-center text-5xl font-bold uppercase text-[#00FF1A] font-alumni mb-12">
                tuga
            </p>
            <FrogText text={"točan odgovor! bravo!"}/>
        </div>
    );
}