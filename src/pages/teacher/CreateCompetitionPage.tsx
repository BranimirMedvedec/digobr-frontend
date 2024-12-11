import Title from "@/components/title"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function CreateCompetition() {
	const [childrenNo, setChildrenNo] = useState<number>(0)
	const [teams, setTeams] = useState<number[]>([])
	const colors = ["#FF5733", "#33C4FF", "#FF33C4", "#33FF57"]

	const handleCreateCompetition = () => {
		console.log("Creating competition with", childrenNo, "children")

		const teams = []
		for (let i = 0; i < childrenNo / 2; i++) {
			teams.push(i)
		}

		setTeams(teams)
	}

	return (
		<div>
			<Title
				showSmallTitle={true}
				showFrog={true}
			/>

			<div className="m-6">
				<h2 className="font-alumni text-white text-3xl font-semibold">
					Broj djece
				</h2>
				<div className="flex items-center justify-center space-x-2">
					<Input
						type="number"
						className="w-2/4 bg-white border-0 rounded-xl h-12 text-center text-3xl font-alumni font-semibold shadow-lg"
						value={childrenNo}
						onChange={(e) =>
							setChildrenNo(parseInt(e.target.value))
						}
					/>
					<Button
						onClick={handleCreateCompetition}
						className="w-2/4 h-12 border-4 border-white rounded-xl text-white uppercase text-3xl font-alumni font-semibold shadow-lg">
						Kreiraj
					</Button>
				</div>
			</div>

			<div className="m-6 border-4 border-white rounded-xl p-4">
				<h2 className="font-alumni text-[#9775FF] text-3xl font-semibold text-right uppercase">
					Učilica 65849
				</h2>
				<h4 className="font-alumni text-white text-3xl font-semibold uppercase mb-4">
					Timovi
				</h4>

				{teams && teams.length > 0 && (
					<div className="space-y-2">
						{teams.map((team, index) => (
							<div
								key={index}
								className="flex flex-row items-center gap-4">
								<div
									className="w-12 h-12 border-4 border-white rounded-xl"
									style={{
										backgroundColor:
											colors[index % colors.length], // Cycle through colors
									}}></div>
								<div className="text-black font-alumni text-3xl font-semibold text-start">
									{team} + {index}
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
