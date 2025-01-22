import GameFrame from "@/components/game-frame.tsx"
import FrogText from "@/components/frog-text.tsx"
import { useEffect } from "react"
import {
	subscribeToEvent,
	unsubscribeFromEvent,
} from "@/lib/socket-functions.ts"
import { useNavigate } from "react-router-dom"
import { getCompetitionLevel } from "@/lib/store-functions"

export default function Guess() {
	const navigate = useNavigate()
	const level = getCompetitionLevel() || 1

	useEffect(() => {
		subscribeToEvent("startGuessing", () => {
			console.log("Start guessing")
			navigate("/student/competition/answer") // enough waiting, the emotion is explained, the rest of the team can answer now
		})

		return () => {
			unsubscribeFromEvent("startGuessing")
		}
	}, [])
	return (
		<GameFrame
			level={level}
			counter={0}
			showCounter={false}>
			{() => {
				return (
					<div className="mt-[50%] md:mt-[20%]">
						<p className="text-center my-8 text-5xl font-bold uppercase text-slate-400 font-alumni">
							gledaj u prijatelja!
						</p>
						<FrogText text={"nauči novu emociju!"} />
					</div>
				)
			}}
		</GameFrame>
	)
}
