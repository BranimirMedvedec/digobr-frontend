import LeaderboardScore from "@/components/leaderboard-score.tsx"
import { GroupWithPlace } from "@/models/group.ts"

export default function LeaderboardColumn(group: GroupWithPlace) {
	return (
		<div
			className={`relative w-1/3 ${
				group.place === 1
					? "h-5/6"
					: group.place === 2
					? "h-2/3"
					: "h-1/2"
			} bg-white bg-opacity-60 rounded-3xl flex flex-col items-center border-white border-2`}>
			<div
				className={`absolute ${
					group.place === 1
						? "-top-16 md:-top-28"
						: "-top-6 md:-top-12"
				} flex animate-bounce`}>
				<img
					src="/star.png"
					alt="Star"
					className="w-6 h-6 md:w-14 md:h-14"
				/>
				{group.place === 1 && (
					<img
						src="/star.png"
						alt="Star"
						className="w-6 h-6 md:w-14 md:h-14 transform -translate-y-4"
					/>
				)}
				{group.place !== 3 && (
					<img
						src="/star.png"
						alt="Star"
						className="w-6 h-6 md:w-14 md:h-14"
					/>
				)}
			</div>
			{group.place === 1 && (
				<img
					src="/frog_2.png"
					alt="Frog"
					className="w-16 md:w-24 absolute -top-[60px] md:-top-[90px]"
				/>
			)}
			<div
				className="relative h-16 md:h-28 border-white md:border-4 w-full rounded-t-3xl md:rounded-t-2xl flex flex-col items-center mb-2"
				style={{
					backgroundColor: group.colorRgb,
				}}>
				<div className="absolute top-2 bg-white px-2 font-bold font-alumni text-xl md:text-2xl rounded-2xl">
					{group.code}
				</div>
			</div>
			{group.score && <LeaderboardScore score={group.score} />}
			<div className="absolute bottom-2 md:bottom-5 md:left-5 bg-white text-black font-extrabold font-alumni text-lg md:text-3xl px-2 md:px-4 md:py-2 rounded md:rounded-xl">
				{group.place}
			</div>
		</div>
	)
}
