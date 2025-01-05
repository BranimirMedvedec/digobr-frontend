import { Competition } from "@/models/competition"
import { CreateCompetition } from "@/models/create-competition"
import { Group } from "@/models/group"

const baseUrl = "http://localhost:3000/api"

export const login = async (
	username: string,
	role: "teacher" | "student"
): Promise<void> => {
	try {
		const url = `${baseUrl}/users?username=${username}&role=${role}`
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`Failed to login: ${response.statusText}`)
		}
	} catch (error) {
		console.error("Login Error:", error)
		throw error
	}
}

type createCompetitionType = Omit<Group[], "score" | "users">
export const createCompetition = async (
	username: string,
	competitionDetails: CreateCompetition
): Promise<createCompetitionType> => {
	try {
		const url = `${baseUrl}/competitions?username=${username}`
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(competitionDetails),
			headers: {
				"Content-Type": "application/json",
			},
		})

		if (!response.ok) {
			throw new Error(
				`Failed to create competition: ${response.statusText}`
			)
		}

		const data: createCompetitionType = await response.json()
		return data
	} catch (error) {
		console.error("Create Competition Error:", error)
		throw error
	}
}

type joinGroupType = Omit<Competition, "groups" | "group"> & {
	group: Omit<Group, "score" | "users">
}
export const joinGroup = async (
	username: string,
	groupCode: string
): Promise<joinGroupType> => {
	try {
		const url = `${baseUrl}/groups/${groupCode}/users?username=${username}`
		const response = await fetch(url, {
			method: "POST",
		})

		if (!response.ok) {
			throw new Error(`Failed to join group: ${response.statusText}`)
		}

		const data: joinGroupType = await response.json()
		return data
	} catch (error) {
		console.error("Join Group Error:", error)
		throw error
	}
}

export const leaveGroup = async (
	username: string,
	groupCode: string
): Promise<void> => {
	try {
		const url = `${baseUrl}/groups/${groupCode}/users?username=${username}`
		const response = await fetch(url, {
			method: "DELETE",
		})

		if (!response.ok) {
			throw new Error(`Failed to leave group: ${response.statusText}`)
		}
	} catch (error) {
		console.error("Leave Group Error:", error)
		throw error
	}
}

type getCompetitionsType = Omit<Competition[], "group" | "groups">
export const getCompetitions = async (
	username: string
): Promise<getCompetitionsType> => {
	try {
		const url = `${baseUrl}/competitions?username=${username}`
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(
				`Failed to get competitions: ${response.statusText}`
			)
		}

		const data: getCompetitionsType = await response.json()
		return data
	} catch (error) {
		console.error("Get Competitions Error:", error)
		throw error
	}
}

type getCompetitionType = Omit<Competition, "group">
export const getCompetition = async (
	username: string,
	competitionId: number
): Promise<getCompetitionType> => {
	try {
		const url = `${baseUrl}/competitions/${competitionId}?username=${username}`
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`Failed to get competition: ${response.statusText}`)
		}

		const data: getCompetitionType = await response.json()
		return data
	} catch (error) {
		console.error("Get Competition Error:", error)
		throw error
	}
}

export const startCompetition = async (
	username: string,
	competitionId: number
): Promise<void> => {
	try {
		const url = `${baseUrl}/competitions/${competitionId}/start?username=${username}`
		const response = await fetch(url, {
			method: "POST",
		})

		if (!response.ok) {
			throw new Error(
				`Failed to start competition: ${response.statusText}`
			)
		}
	} catch (error) {
		console.error("Start Competition Error:", error)
		throw error
	}
}

type endCompetitionType = Omit<Competition, "group">
export const endCompetition = async (
	username: string,
	competitionId: number
): Promise<endCompetitionType> => {
	try {
		const url = `${baseUrl}/competitions/${competitionId}/close?username=${username}`
		const response = await fetch(url, {
			method: "POST",
		})

		if (!response.ok) {
			throw new Error(`Failed to end competition: ${response.statusText}`)
		}

		const data: endCompetitionType = await response.json()
		return data
	} catch (error) {
		console.error("End Competition Error:", error)
		throw error
	}
}
