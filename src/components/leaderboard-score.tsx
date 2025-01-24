type LeaderboardScoreProps = {
	score: number
}

export default function LeaderboardScore({ score }: LeaderboardScoreProps) {
	return (
		<div className="relative h-7 w-7 md:h-12 md:w-12 font-bold font-alumni flex flex-col items-center">
			{/* <p className="absolute -top-1 text-[#E127E7] md:text-lg">BODOVI</p> */}
			<p className="absolute text-xl md:text-3xl">{score}</p>
		</div>
	)
}
