import FrogText from "@/components/frog-text.tsx"
import { formatImage, getGroupLevelScore } from "@/lib/functions"
import { getQuestionData, getStudentGroup } from "@/lib/store-functions"

import { Translations as T } from "@/lib/translations"
import { useEffect, useState } from "react"

export default function RoundResults() {
	const data = getQuestionData()
	const imitationImage = data?.imitationImage?.data
	const guessingImage = data?.guessingImages?.find(
		(image) => image.emotionName === data?.imitationImage?.emotionName
	)?.data
	const emotionName = data?.imitationImage?.emotionName
	const translatedEmotion =
		emotionName && emotionName in T
			? T[emotionName as keyof typeof T]
			: "Unknown emotion"
	const groupCode = getStudentGroup()
	const level = data?.level
	const [score, setScore] = useState<number>(0)

	async function handleGetGroupLevelScore() {
		try {
			if (!groupCode || !level) {
				console.error("Group code or level is missing")
				return
			}

			const response = await getGroupLevelScore(groupCode, level)
			setScore(response)
		} catch (error) {
			console.error("Error getting score:", error)
		}
	}

	useEffect(() => {
		handleGetGroupLevelScore()
	}, [])

	return (
		<div className="flex flex-col items-center justify-between py-12 h-full">
			<div className="grid grid-cols-2 grid-rows-4 justify-items-center px-5 gap-4 w-screen md:w-2/3">
				<img
					id="emotion-image"
					src={formatImage(guessingImage)}
					alt="Emotion Image 1"
					className="row-span-2 rounded-2xl md:w-[30vw]"
				/>
				<img
					id="emotion-image"
					src={formatImage(imitationImage)}
					alt="Emotion Image 2"
					className="row-span-2 rounded-2xl md:w-[30vw]"
				/>
				<p className="col-span-2 text-center text-6xl font-bold uppercase text-gray-400 font-alumni">
					{translatedEmotion}
				</p>
				<p className="col-span-2 self-center text-center border-[7px] border-[#FFFB00] py-3 px-6 mx-12 rounded-xl text-4xl font-bold uppercase text-black font-alumni">
					BODOVI: {score}
				</p>
			</div>
			<FrogText text={"naučili smo novu emociju!"} />
		</div>
	)
}
