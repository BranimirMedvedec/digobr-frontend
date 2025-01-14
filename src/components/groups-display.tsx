import { Group } from "@/models/group"

type GroupsDisplayProps = {
	competitionName: string
	groups: Group[]
}

export default function GroupsDisplay({
	competitionName,
	groups,
}: GroupsDisplayProps) {
	return (
		<>
			<h2 className="font-alumni text-[#9775FF] text-3xl font-semibold text-right uppercase">
				Učilica {competitionName}
			</h2>
			<h4 className="font-alumni text-white text-3xl font-semibold uppercase mb-4">
				Grupe
			</h4>

			{groups && groups.length > 0 && (
				<div className="space-y-2">
					{groups.map((group, index) => (
						<div
							key={index}
							className="flex flex-row items-center gap-4">
							<div
								className="w-12 h-12 border-4 border-white rounded-xl"
								style={{
									backgroundColor: group.colorRgb,
								}}></div>
							<div className="text-black font-alumni text-3xl font-semibold text-start">
								{group.code}
							</div>
						</div>
					))}
				</div>
			)}
		</>
	)
}
