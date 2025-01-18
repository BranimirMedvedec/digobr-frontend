import FrogText from "@/components/frog-text.tsx"
import { formatImage } from "@/lib/functions"
import { getQuestionData } from "@/lib/store-functions"

type EmotionImageProps = {
	imageBlur?: boolean
	text: string
}

// TODO: use real image from BE
export default function EmotionImage({
	imageBlur = false,
	text,
}: EmotionImageProps) {
	const data = getQuestionData()
	const image = data?.imitationImage?.data

	return (
		image && (
			<>
				<img
					id="emotion-image"
					src={formatImage(image)}
					alt="emotion-image"
					className={`${
						imageBlur && "blur"
					} rounded-2xl w-3/4 mt-20 mb-2 md:w-1/2 lg:w-1/3`}
				/>
				<FrogText text={text} />
			</>
		)
	)
}
