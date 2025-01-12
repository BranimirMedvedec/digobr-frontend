import { getUsername } from "@/lib/auth-functions"
import { getCompetition } from "@/lib/functions"
import { Group } from "@/models/group"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

type CompetitionDetailsType = {
	competitionId: number
}

export default function CompetitionDetails({
	competitionId,
}: CompetitionDetailsType) {
	const username = getUsername()
	const [groups, setGroups] = useState<Group[]>([])

	async function getCompetitionDetails() {
		try {
			if (!username) {
				alert(
					"Morate biti prijavljeni da biste vidjeli detalje natjecanja"
				)
				return
			}

			const data: Group[] = await getCompetition(username, competitionId)
			setGroups(data)
		} catch (error) {
			console.error("Error getting competition details:", error)
		}
	}

	useEffect(() => {
		getCompetitionDetails()
	}, [])

	const handleDetailedView = () => {
		console.log("Detailed view clicked")
	}

	// mock data
	useEffect(() => {
		setGroups([
			{
				code: "A",
				colorRGB: "rgb(139, 154, 249)",
				score: 100,
			},
			{
				code: "B",
				colorRGB: "rgb(139, 154, 249)",
				score: 90,
			},
			{
				code: "C",
				colorRGB: "rgb(139, 154, 249)",
				score: 80,
			},
		])
	}, [])

	return (
		<div>
			{groups.map((group) => (
				<div
					key={group.code}
					className="flex items-center space-x-2">
					<span className="w-3 h-3 bg-[#8b9af9]"></span>
					<span>{group.code}</span>
					<span> - </span>
					<span>{group.score}</span>
				</div>
			))}

			<Button onClick={handleDetailedView}>Detaljno</Button>
		</div>
	)
}
