import FrogText from "@/components/frog-text.tsx";

export default function RoundResults() {
  return (
    <div className="flex flex-col items-center justify-between py-12 h-full">
      <div className="grid grid-cols-2 grid-rows-4 justify-items-center px-5 gap-4 w-screen md:w-2/3">
        <img
          id="emotion-image"
          src="/temporary_image.png"
          alt="Emotion Image"
          className="row-span-2 rounded-2xl md:w-[30vw]"
        />
        <img
          id="emotion-image"
          src="/temporary_image.png"
          alt="Emotion Image"
          className="row-span-2 rounded-2xl md:w-[30vw]"
        />
        <p className="col-span-2 text-center text-6xl font-bold uppercase text-gray-400 font-alumni">
          tuga
        </p>
        <p className="col-span-2 self-center text-center border-[7px] border-[#FFFB00] py-3 px-6 mx-12 rounded-xl text-4xl font-bold uppercase text-black font-alumni">
          BODOVI: 1244
        </p>
      </div>
      <FrogText text={"naučili smo novu emociju!"} />
    </div>
  );
}
