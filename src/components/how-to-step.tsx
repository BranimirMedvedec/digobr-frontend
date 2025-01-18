type HowToStepProps = {
  actor: string;
  text: string;
};
export default function HowToStep({
  actor,
  text,
}: HowToStepProps): JSX.Element {
  return (
    <div className="flex items-center justify-start w-full gap-2 bg-white bg-opacity-40 p-2 rounded-2xl border border-white">
      {actor === "TEACHER" && (
        <img src="/teacher.png" alt="Teacher" className="w-12 h-12" />
      )}
      {actor === "FROG" && (
        <img
          src="/frog_2.png"
          alt="Frog"
          className="w-12 h-12 bg-purple-500 rounded-full border-4 border-purple-400"
        />
      )}
      {actor === "STUDENTS" && (
        <img src="/students.png" alt="Student" className="w-16 h-12" />
      )}
      <p>{text}</p>
    </div>
  );
}
