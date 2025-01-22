import FrogText from "@/components/frog-text.tsx"
import { getUsername } from "@/lib/auth-functions"
import { formatImage, giveAnswer } from "@/lib/functions"
import {
	getCompetitionLevel,
	getQuestionData,
	getStudentGroup,
} from "@/lib/store-functions"
import { Answer } from "@/models/answer"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"
import GameFrame from "@/components/game-frame.tsx"
import { useEffect, useRef, useState } from "react"
import {
	subscribeToEvent,
	unsubscribeFromEvent,
} from "@/lib/socket-functions.ts"

export default function MultipleAnswer() {
	const ANSWER_TIMER = 13 /* time for the guesser to choose their answer */

	const username = getUsername()
	const groupCode = getStudentGroup()
	const navigate = useNavigate()
	const data = getQuestionData()
	const level = getCompetitionLevel() || 1
	const images = data?.guessingImages
	const formattedImages = images?.map((image) => {
		return {
			data: formatImage(image.data),
		}
	})
	const [showCounter, setShowCounter] = useState(true)
	const selectedImgIndexRef = useRef<number | undefined>(undefined)
	const [selectedImgIndex, setSelectedImgIndex] = useState<
		number | undefined
	>(undefined)
	const { toast } = useToast()

	const handleAnswer = (index: number, counterValue: number) => async () => {
		console.log("Answered:", index)
		selectedImgIndexRef.current = index
		setShowCounter(false)
		setSelectedImgIndex(index)
		const selectedImage = images?.[index]

		try {
			const correctEmotionId = images?.find(
				(image) => image.isCorrectAnswer
			)?.emotionId
			const answerBody: Answer = {
				correctEmotionId: correctEmotionId ?? 0,
				imitatorUserId: data?.imitatorId ?? 0,
				isAnswerCorrect: selectedImage?.isCorrectAnswer ?? false,
				percentageOfTimeLeft: counterValue / ANSWER_TIMER,
			}

			if (!username || !groupCode) {
				toast({
					title: "Morate biti prijavljeni da biste vidjeli aktivno natjecanje.",
					variant: "destructive",
					className: "bg-black text-white border-1 rounded-xl",
					duration: 2500,
				})
				return
			}

			await giveAnswer(username, groupCode, answerBody)
		} catch (error) {
			console.error("Error requesting emotion:", error)
		}
	}

	useEffect(() => {
		subscribeToEvent("guessingOver", () => {
			console.log("Guessing over")
			const index = selectedImgIndexRef.current // Access the latest selected index from the ref
			console.log(index)
			if (index !== undefined && images?.[index]?.isCorrectAnswer) {
				console.log("Correct answer")
				navigate("/student/competition/correct-answer")
			} else {
				console.log("Wrong answer")
				navigate("/student/competition/wrong-answer", {
					state: { index: index },
				})
			}
		})

		return () => {
			unsubscribeFromEvent("guessingOver")
		}
	}, [])

	return (
		<GameFrame
			level={level}
			counter={ANSWER_TIMER}
			showCounter={showCounter}>
			{(counterValue) => {
				if (selectedImgIndex === undefined)
					return (
						<div className="mt-10 flex flex-col items-center gap-10 sm:w-1/2 md:w-1/3">
							<div className="grid grid-rows-2 grid-cols-2 gap-4 px-4 w-full">
								{formattedImages &&
									formattedImages.map((image, index) => (
										<img
											key={index}
											onClick={handleAnswer(
												index,
												counterValue
											)}
											src={image.data}
											alt="A frog"
											className={`rounded-3xl w-full h-auto ${
												(index ===
													selectedImgIndexRef.current ||
													index ===
														selectedImgIndex) &&
												"border-8 border-violet-300"
											}`}
										/>
									))}
							</div>

							<FrogText text={"odaberi emociju!"} />
						</div>
					)
				else
					return (
						<div>
							<div className="mt-[50%] md:mt-[20%]">
								<FrogText
									text={"odgovoreno! čekaj prijatelje!"}
								/>
							</div>
						</div>
					)
			}}
		</GameFrame>
	)
}
