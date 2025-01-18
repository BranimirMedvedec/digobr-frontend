import Title from "@/components/title";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center gap-10">
      <div className="absolute top-4 w-full">
        <Title showSmallTitle={true} showFrog={true} />
      </div>

      <div className="flex flex-col items-center justify-center mx-2 w-3/4 gap-4 p-4">
        <h2 className="font-alumni text-white text-4xl font-semibold uppercase text-center">
          Stranica nije pronađena
        </h2>

        <Link
          to="/"
          className="text-center text-[#E127E7] text-2xl font-gochi underline"
        >
          vratite se na početnu stranicu
        </Link>
      </div>
    </div>
  );
}
