import { removeCompetitionLevel, removeStudentGroup } from "./store-functions"

type User = {
	username: string
	role: "teacher" | "student"
}

export const saveUserInfo = ({ username, role }: User): void => {
	if (!userIsLoggedIn()) {
		localStorage.setItem("username", username)
		localStorage.setItem("role", role)
	} else {
		console.error("User is already logged in")
		throw new Error("User is already logged in")
	}
}

export const getUserInfo = (): User | null => {
	const username = localStorage.getItem("username")
	const role = localStorage.getItem("role")
	return username && role
		? { username, role: role as "teacher" | "student" }
		: null
}

export const getUsername = (): string | null => {
	const username = localStorage.getItem("username")
	return username ? username : null
}

export const getRole = (): "teacher" | "student" | null => {
	const role = localStorage.getItem("role")
	return role ? (role as "teacher" | "student") : null
}

export const userIsLoggedIn = (): boolean => {
	const username = localStorage.getItem("username")
	const role = localStorage.getItem("role")
	return username !== null && role !== null
}

export const removeUserInfo = (): void => {
	if (userIsLoggedIn()) {
		localStorage.removeItem("username")
		localStorage.removeItem("role")
		removeStudentGroup()
		removeCompetitionLevel()
	} else {
		console.error("User is not logged in")
		throw new Error("User is not logged in")
	}
}
