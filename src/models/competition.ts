import { Group } from "./group"
import { Status } from "./status-enum"

export type Competition = {
	id: number
	name: string
	startDateTime: string
	endDateTime: string
	status: Status
	group: Group
	groups: Group[]
}
