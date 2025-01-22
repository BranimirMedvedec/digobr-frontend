import FrogText from "@/components/frog-text.tsx"
import { formatImage } from "@/lib/functions"
import { getCompetitionLevel, getQuestionData } from "@/lib/store-functions"
import { Translations as T } from "@/lib/translations"
import GameFrame from "@/components/game-frame.tsx"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function CorrectAnswer() {
	// TODO extract in separate file
	const SHOW_ANSWER_RESULTS = 5

	const navigate = useNavigate()
	const data = getQuestionData()
	const correctAnswer = data?.guessingImages?.find(
		(image) => image.isCorrectAnswer
	)
	const emotionName = correctAnswer?.emotionName
	const translatedEmotion =
		emotionName && emotionName in T
			? T[emotionName as keyof typeof T]
			: "Unknown emotion"
	const level = getCompetitionLevel() || 1

	useEffect(() => {
		setTimeout(() => {
			navigate("/student/competition/results")
		}, SHOW_ANSWER_RESULTS * 1000)
	}, [])

	return (
		<GameFrame
			level={level}
			counter={0}
			showCounter={false}>
			{() => (
				<div className="flex flex-col items-center justify-start p-12 sm:w-1/2 md:w-1/3">
					<img
						id="frog-4"
						src={formatImage(correctAnswer?.data)}
						alt="A frog"
						className="rounded-3xl border-8 border-[#00FF1A]"
					/>
					<p className="text-center text-5xl font-bold uppercase text-[#00FF1A] font-alumni mb-12">
						{translatedEmotion}
					</p>
					<FrogText text={"točan odgovor! bravo!"} />
				</div>
			)}
		</GameFrame>
	)
}
