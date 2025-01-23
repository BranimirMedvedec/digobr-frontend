import CustomAccordion from "@/components/custom-accordion"
import Title from "@/components/title"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast"
import { Info } from "lucide-react"

export default function Competitions() {
	const { toast } = useToast()

	const legend = `
    Zelena boja - natjecanje je započelo
    Siva boja - natjecanje nije započelo
    Crvena boja - natjecanje je završilo`

	return (
		<div className="max-h-screen w-screen flex flex-col items-center justify-center">
			<div className="absolute top-4 w-full">
				<Title
					showSmallTitle={true}
					showFrog={true}
				/>
			</div>

			<div className="w-full flex flex-col items-center justify-center h-screen">
				<ScrollArea className="w-[90%] max-h-[70%] rounded-xl border mt-10">
					<CustomAccordion />
				</ScrollArea>
			</div>

			<Info
				className="w-8 h-8 absolute bottom-4 right-4"
				onClick={() => {
					toast({
						title: "Legenda",
						description: <pre>{legend}</pre>,
						className: "bg-black text-white border-1 rounded-xl",
						duration: 2500,
					})
				}}
			/>
		</div>
	)
}
