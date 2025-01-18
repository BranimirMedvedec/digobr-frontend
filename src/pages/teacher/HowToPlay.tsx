import Title from "@/components/title.tsx";
import HowToStep from "@/components/how-to-step.tsx";

const data: { actor: string; text: string }[] = [
  { actor: "TEACHER", text: "Učitelj upisuje ime učilice i broj djece." },
  { actor: "FROG", text: "E-Motion prikazuje kodove i boje timova." },
  {
    actor: "TEACHER",
    text: "Učitelj dijeli djecu u timove i započinje natjecanje.",
  },
  {
    actor: "FROG",
    text: "E-Motion učitelju prikazuje ljestvicu igre koju učitelj može prikazati učenicima projektorom.",
  },
  {
    actor: "STUDENTS",
    text: "Učenici upisuju kod svog tima i ulaze u igru. Svaki tim ima svoju boju.",
  },
];

export default function HowToPlay() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start sm:w-[80vw] md:w-[60vw] sm:m-auto pb-5">
      <Title showSmallTitle={true} showFrog={false} />
      <div className="w-full flex flex-col sm:flex-row gap-2 px-5 lg:mt-10">
        <div className="w-full flex flex-col items-start justify-start gap-2">
          {data.map((data, index) => (
            <HowToStep key={index} actor={data.actor} text={data.text} />
          ))}
        </div>
        <div className="w-full flex flex-col justify-start items-center bg-white bg-opacity-40 p-2 rounded-2xl border border-white">
          <div className="w-full flex flex-row justify-center items-center gap-2 my-2">
            <img src="/teacher.png" alt="Teacher" className="w-12 h-12" />
            <img
              src="/frog_2.png"
              alt="Frog"
              className="w-12 h-12 bg-purple-500 rounded-full border-4 border-purple-400"
            />
            <img
              src="/students.png"
              alt="Student"
              className="w-[3.3rem] h-12 transform -translate-x-1"
            />
          </div>
          <div className="px-2">
            Igra ima 4 levela i u svakom skup emocija postaje teži. <br />
            Level ima runde tako da svaki član tima barem jednom može oponašati
            emociju. <br />
            Unutar svake runde jedan član tima oponaša emociju, dok svi ostali
            pogađaju koja je emocija bila odglumljena.
          </div>
        </div>
      </div>
    </div>
  );
}
