import JoinGroupForm from "@/components/join-group-form";
import Title from "@/components/title";

export default function StudentHome() {
  return (
    <div className="min-h-screen w-screen sm:w-2/3 lg:w-1/2 sm:m-auto flex flex-col items-center justify-center">
      <div className="absolute top-4 w-full">
        <Title showSmallTitle={true} showFrog={false} />
      </div>

      <JoinGroupForm />
    </div>
  );
}
