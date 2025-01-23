import { getGroupScore } from "@/lib/functions"
import { getStudentColor, getStudentGroup } from "@/lib/store-functions"
import { useEffect, useState } from "react"

export default function CelebrateScore() {
	const groupCode = getStudentGroup()
	const color = getStudentColor()
	const [score, setScore] = useState(0)

	useEffect(() => {
		;(async () => {
			if (!groupCode) return
			const response = await getGroupScore(groupCode)
			setScore(response)
		})()
	}, [groupCode])

	return (
		<div className="absolute top-32 lg:top-52 w-full h-40 my-10">
			<div className="flex flex-col justify-center items-center h-40 w-full">
				<p
					className={`relative border-[7px] p-4 rounded-xl text-4xl font-bold uppercase text-black font-alumni transition-opacity duration-2000`}
					style={{ borderColor: color ?? "#FFFB00" }}>
					BODOVI: {score}
					<img
						src="/celebrate.png"
						alt="Celebrate"
						className="absolute -bottom-1/2 -left-12 h-24"
					/>
					<img
						src="/celebrate.png"
						alt="Celebrate"
						className="absolute -bottom-1/2 -right-12 h-24 scale-x-[-1]"
					/>
				</p>
			</div>
		</div>
	)
}
