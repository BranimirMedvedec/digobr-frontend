import CustomAccordion from "@/components/custom-accordion"
import Title from "@/components/title"

export default function Competitions() {
	return (
		<div className="min-h-screen w-screen flex flex-col items-center justify-center">
			<div className="absolute top-4 w-full">
				<Title
					showSmallTitle={true}
					showFrog={true}
				/>
			</div>

			<div className="w-full flex flex-col items-center justify-center">
				<CustomAccordion />
			</div>
		</div>
	)
}
