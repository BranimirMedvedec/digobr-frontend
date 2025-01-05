import { User } from "./user"

export type Group = {
	code: string
	colorRGB: string
	score: number
	users: User[]
}
