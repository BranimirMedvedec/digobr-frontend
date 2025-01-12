import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Competition } from "@/models/competition"
import { Status } from "@/models/status-enum"
import { useEffect, useState } from "react"
import CompetitionDetails from "./competition-details"
import { getUsername } from "@/lib/auth-functions"
import { getCompetitions } from "@/lib/functions"

export default function CustomAccordion() {
	const username = getUsername()
	const [competitions, setCompetitions] = useState<Competition[]>([])

	async function getAllCompetitions() {
		try {
			if (!username) {
				alert("Morate biti prijavljeni da biste kreirali natjecanje")
				return
			}

			const data: Competition[] = await getCompetitions(username)
			setCompetitions(data)
		} catch (error) {
			console.error("Error getting competitions:", error)
		}
	}

	// useEffect(() => {
	// 	getAllCompetitions()
	// }, [])

	useEffect(() => {
		setCompetitions([
			{
				id: 1,
				name: "Competition 1",
				startDateTime: new Date().toISOString(),
				endDateTime: new Date().toISOString(),
				status: Status.NOT_STARTED,
			},
			{
				id: 2,
				name: "Competition 2",
				startDateTime: new Date().toISOString(),
				endDateTime: new Date().toISOString(),
				status: Status.STARTED,
			},
			{
				id: 3,
				name: "Competition 3",
				startDateTime: new Date().toISOString(),
				endDateTime: new Date().toISOString(),
				status: Status.FINISHED,
			},
		])
	}, [])

	// Map status to colors
	const statusColors = {
		[Status.NOT_STARTED]: "bg-gray-500", // Gray for not started
		[Status.STARTED]: "bg-green-500", // Green for started
		[Status.FINISHED]: "bg-red-500", // Red for finished
	}

	return (
		<Accordion
			type="single"
			collapsible
			className="w-3/4 bg-white rounded-3xl shadow-lg p-4">
			{competitions.map((competition) => (
				<AccordionItem
					key={competition.id}
					value={`item-${competition.id}`}>
					<AccordionTrigger className="flex justify-between items-center">
						<div className="flex items-center space-x-2">
							<span
								className={`w-3 h-3 rounded-full ${
									statusColors[competition.status]
								}`}></span>
							<span className="font-semibold">
								{competition.name}
							</span>
						</div>
						<span className="text-sm text-gray-500">
							{new Date(
								competition.startDateTime
							).toLocaleDateString()}
						</span>
					</AccordionTrigger>
					<AccordionContent>
						<CompetitionDetails competitionId={competition.id} />
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
