import LeaderboardScore from "@/components/leaderboard-score.tsx"
import { GroupWithPlace } from "@/models/group.ts"

export default function LeaderboardRow(group: GroupWithPlace) {
	return (
		<div className="mx-2 md:mx-4 lg:mx-16 px-6 py-3 bg-white bg-opacity-60 rounded-2xl flex items-center justify-between border-white border-2">
			<div className="bg-white text-black font-extrabold font-alumni text-lg md:text-3xl px-2 md:px-4 md:py-2 rounded md:rounded-xl">
				{group.place}
			</div>
			<div
				className="relative py-2 h-10 md:h-full w-1/3 border-[3px] border-white rounded-xl"
				style={{
					backgroundColor: group.colorRgb,
				}}>
				<div className="absolute -bottom-1 -right-4 bg-white px-2 font-bold font-alumni text-xl md:text-2xl rounded-2xl">
					{group.code}
				</div>
			</div>
			<LeaderboardScore score={group.score} />
		</div>
	)
}
