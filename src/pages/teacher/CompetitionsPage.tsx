import CustomAccordion from "@/components/custom-accordion";
import Title from "@/components/title";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Competitions() {
  return (
    <div className="max-h-screen w-screen flex flex-col items-center justify-center">
      <div className="absolute top-4 w-full">
        <Title showSmallTitle={true} showFrog={true} />
      </div>

      <div className="w-full flex flex-col items-center justify-center h-screen">
        <ScrollArea className="w-[90%] max-h-[70%] rounded-xl border mt-10">
          <CustomAccordion />
        </ScrollArea>
      </div>
    </div>
  );
}
