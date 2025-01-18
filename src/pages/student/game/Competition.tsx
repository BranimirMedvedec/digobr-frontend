import LevelButton from "@/components/level-button.tsx"
import { useEffect, useState } from "react"
import Frog from "@/components/frog.tsx"
import EmoFrogFlower from "@/components/emo-frog-flower.tsx"
import CelebrateScore from "@/components/celebrate-score.tsx"
import TeamColor from "@/components/team-color.tsx"
import WaitingRound from "@/pages/student/game/WaitingRound.tsx"
import { getCompetitionLevel } from "@/lib/store-functions"

export default function Competition() {
	const gameLevel = getCompetitionLevel() ?? 0

	const [levelChange, setLevelChange] = useState<boolean>(() => {
		const initialLevel = false
		/* make frog jump to the next level */
		setTimeout(() => {
			setLevelChange((prevLevel) => !prevLevel)
		}, 1000)

		return initialLevel
	})

	const [invisibleLevels, setInvisibleLevels] = useState<number[]>([])
	const [animateFrogs, setAnimateFrogs] = useState<boolean>(false)
	const [animateScore, setAnimateScore] = useState<boolean>(false)
	const [waitGameRound, setWaitGameRound] = useState<boolean>(false)
	const levels = [1, 2, 3, 4]

	function defineLevelStatus(level: number) {
		if (level === gameLevel) {
			return levelChange ? "ACTIVE_FROG" : "ACTIVE"
		} else if (level === gameLevel - 1 && !levelChange) {
			return "ACTIVE_FROG"
		}
		return "INACTIVE"
	}

	useEffect(() => {
		let timeoutId: NodeJS.Timeout

		if (levelChange) {
			levels.forEach((level) => {
				timeoutId = setTimeout(() => {
					setInvisibleLevels((prev) => [...prev, level])
				}, level * 250)
			})

			if (gameLevel !== 5) {
				setTimeout(() => {
					setWaitGameRound(true)
				}, 1500)
			}
		}

		if (gameLevel === 5) {
			setTimeout(() => {
				setAnimateFrogs(true)
			}, gameLevel * 500)

			setTimeout(() => {
				setAnimateScore(true)
			}, gameLevel * 500 + 2000)

			return () => clearTimeout(timeoutId)
		}
	}, [levelChange])

	return (
		<div className="relative h-screen sm:w-1/2 lg:w-1/3 mx-auto overflow-hidden">
			{waitGameRound ? (
				<WaitingRound level={gameLevel} />
			) : (
				<>
					{animateScore && (
						<>
							<TeamColor
								colorHEX="#FFFB00"
								positionCSS="absolute"
							/>
							<CelebrateScore score={5265} />
						</>
					)}
					<EmoFrogFlower animateFrogs={animateFrogs} />
					<div className="flex flex-col items-center justify-around w-full px-8 h-2/3">
						{levels.reverse().map((level) => {
							const isInvisible = invisibleLevels.includes(level)

							return level % 2 !== 0 ? (
								<div
									key={level}
									id={level.toString()}
									className={`flex ${
										level === 1 && "flex-row-reverse"
									} items-center justify-around w-full transition-opacity duration-500 ${
										isInvisible
											? "opacity-0"
											: "opacity-100"
									}`}>
									<LevelButton
										level={level}
										status={defineLevelStatus(level)}
									/>
									<img
										src="/flower.png"
										alt="Flower"
										className={`w-20 transform ${
											level === 1
												? "-translate-y-1/2"
												: "-translate-y-1/4"
										}`}
									/>
								</div>
							) : (
								<div
									key={level}
									id={level.toString()}
									className={`transition-opacity duration-500 ${
										isInvisible
											? "opacity-0"
											: "opacity-100"
									}`}>
									<LevelButton
										level={level}
										status={defineLevelStatus(level)}
									/>
								</div>
							)
						})}
					</div>
					<div className="relative flex items-center h-1/6 pr-10">
						{!animateFrogs && (
							<img
								src="/leaf.png"
								alt="Leaf"
								className="absolute bottom-2 right-4 h-24"
							/>
						)}
						{gameLevel === 1 && !levelChange && (
							<Frog positionCSS="absolute bottom-10 right-6" />
						)}
					</div>
				</>
			)}
		</div>
	)
}
