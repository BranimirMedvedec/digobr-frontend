import Title from "@/components/title"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function JoinCompetition() {
	const [teamCode, setTeamCode] = useState<undefined | number>()

	const handleJoinCompetition = () => {
		console.log("Team Code: ", teamCode)
	}

	return (
		<div className="relative min-h-screen w-screen flex flex-col">
			<Title
				showSmallTitle={true}
				showFrog={false}
			/>

			<div className="flex-grow flex flex-col items-center justify-center">
				<h2 className="font-alumni text-white text-3xl font-semibold uppercase text-left">
					Upiši kod tima
				</h2>

				<Input
					type="number"
					className="w-full bg-white border-0 rounded-xl h-12 text-center text-3xl font-alumni font-semibold shadow-lg"
					value={teamCode}
					onChange={(e) => setTeamCode(parseInt(e.target.value))}
				/>

				<div className="flex items-center justify-left">
					<Button
						onClick={handleJoinCompetition}
						className="w-3/4 h-12 border-4 border-white rounded-xl text-white uppercase text-3xl font-alumni font-semibold shadow-lg">
						Start
					</Button>
					<img
						src="/frog.png"
						alt="Frog"
						className="w-16 h-16 drop-shadow-lg"
					/>
				</div>
			</div>

			<Button className="absolute bottom-0 right-0 border-white rounded-xl text-white uppercase text-3xl font-alumni font-semibold shadow-lg">
				Učitelj
			</Button>
		</div>
	)
}
