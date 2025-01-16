import { getUsername } from "@/lib/auth-functions"
import { getCompetition, getGroupDetails } from "@/lib/functions"
import { Group } from "@/models/group"
import { useEffect, useState } from "react"
import { TreeView, TreeDataItem } from "./ui/tree-view"
import { User } from "@/models/user"

type CompetitionDetailsType = {
	competitionId: number
}

type GroupWithUsers = Group & { users: User[] }

export default function CompetitionDetails({
	competitionId,
}: CompetitionDetailsType) {
	const username = getUsername()
	const [treeData, setTreeData] = useState<TreeDataItem[]>([])

	async function getCompetitionDetails() {
		try {
			if (!username) {
				alert(
					"Morate biti prijavljeni da biste vidjeli detalje natjecanja"
				)
				return
			}

			const groups: Group[] = await getCompetition(
				username,
				competitionId
			)

			groups.sort((a, b) => b.score - a.score)

			const groupsWithUsers: GroupWithUsers[] = await Promise.all(
				groups.map(async (group) => {
					const users: User[] = await getGroupDetails(group.code)

					users.sort((a, b) => b.score - a.score)

					return { ...group, users }
				})
			)

			setTreeData(convertToTreeData(groupsWithUsers))
		} catch (error) {
			console.error("Error getting competition details:", error)
		}
	}

	function convertToTreeData(
		groupsWithUsers: GroupWithUsers[]
	): TreeDataItem[] {
		return groupsWithUsers.map((group) => ({
			id: group.code,
			name: (
				<div className="flex items-center gap-2 pl-1">
					<div
						className="w-3 h-3 rounded-full ring-1 ring-black"
						style={{
							backgroundColor: group.colorRgb,
						}}></div>
					<span>{`${group.code} - Score: ${group.score}`}</span>
				</div>
			),
			children: group.users.map((user) => ({
				id: user.id.toString(),
				name: `${user.username} - Score: ${user.score}`,
				children: [],
			})),
		}))
	}

	useEffect(() => {
		getCompetitionDetails()
	}, [])

	return (
		<>
			<TreeView
				data={treeData}
				// set the group.colorRgb to the color of the group
			/>
		</>
	)
}
