import FrogText from "@/components/frog-text.tsx";

export default function MultipleAnswer() {

    return (
        <div className="mt-10 flex flex-col items-center gap-10 sm:w-1/2 md:w-1/3">
            <div className="grid grid-rows-2 grid-cols-2 gap-4 px-4 w-full">
                <img
                    id="frog-1"
                    src="/temporary_image.png"
                    alt="A frog"
                    className="rounded-3xl w-full h-auto"
                />
                <img
                    id="frog-2"
                    src="/temporary_image.png"
                    alt="A frog"
                    className="rounded-3xl w-full h-auto"
                />
                <img
                    id="frog-3"
                    src="/temporary_image.png"
                    alt="A frog"
                    className="rounded-3xl w-full h-auto"
                />
                <img
                    id="frog-4"
                    src="/temporary_image.png"
                    alt="A frog"
                    className="rounded-3xl"
                />
            </div>

            <FrogText text={"odaberi emociju!"}/>
        </div>
    );
}