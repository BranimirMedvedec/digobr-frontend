import { Answer } from "@/models/answer"
import { Competition } from "@/models/competition"
import { CreateCompetition } from "@/models/create-competition"
import { Emotion } from "@/models/emotion"
import { Group } from "@/models/group"
import { QuestionInfo } from "@/models/question-info"
import { User } from "@/models/user"

const baseUrl = "http://localhost:3000/api"

// login/registration of user
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

// teacher creates a competition
type createCompetitionType = Group[]
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

// student joins a group
type joinGroupType = Competition & {
	group: Group
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

// student leaves a group
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

// teacher gets all competitions created by them
type getCompetitionsType = Competition[]
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

// teacher gets specific competition
type getCompetitionType = Competition
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

// teacher starts a competition
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

// teacher ends a competition
type endCompetitionType = Group[]
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

// student requests new question, ie. pictures of emotions
type requestEmotionType = Emotion & {
	imitationImage: QuestionInfo
} & {
	guessingImages: QuestionInfo[] | null
}
export const requestEmotion = async (
	username: string,
	groupCode: string
): Promise<requestEmotionType> => {
	try {
		const url = `${baseUrl}/request-emotion?code=${groupCode}&username=${username}`
		const response = await fetch(url, {
			method: "POST",
		})

		if (!response.ok) {
			throw new Error(`Failed to request emotion: ${response.statusText}`)
		}

		const data: requestEmotionType = await response.json()
		return data
	} catch (error) {
		console.error("Request Emotion Error:", error)
		throw error
	}
}

// student gives answer to question
export const giveAnswer = async (answer: Answer): Promise<void> => {
	try {
		const url = `${baseUrl}/give-answer`
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(answer),
			headers: {
				"Content-Type": "application/json",
			},
		})

		if (!response.ok) {
			throw new Error(`Failed to give answer: ${response.statusText}`)
		}
	} catch (error) {
		console.error("Give Answer Error:", error)
		throw error
	}
}

// get group score for a specific emotion
export const getGroupEmotionScore = async (
	groupCode: string,
	emotionId: number
): Promise<number> => {
	try {
		const url = `${baseUrl}/group-emotion-score/${groupCode}/${emotionId}`
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(
				`Failed to get group emotion score: ${response.statusText}`
			)
		}

		const data: number = await response.json()
		return data
	} catch (error) {
		console.error("Get Group Emotion Score Error:", error)
		throw error
	}
}

// get group score for a specific level
export const getGroupLevelScore = async (
	groupCode: string,
	levelId: number
): Promise<number> => {
	try {
		const url = `${baseUrl}/group-score/${groupCode}/${levelId}`
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(
				`Failed to get group level score: ${response.statusText}`
			)
		}

		const data: number = await response.json()
		return data
	} catch (error) {
		console.error("Get Group Level Score Error:", error)
		throw error
	}
}

// get group score by ALL levels
export const getGroupScore = async (groupCode: string): Promise<number> => {
	try {
		const url = `${baseUrl}/group-score/${groupCode}`
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`Failed to get group score: ${response.statusText}`)
		}

		const data: number = await response.json()
		return data
	} catch (error) {
		console.error("Get Group Score Error:", error)
		throw error
	}
}

// get group details - info about all users in group
type getGroupDetailsType = User[]
export const getGroupDetails = async (
	groupCode: string
): Promise<getGroupDetailsType> => {
	try {
		const url = `${baseUrl}/groups/${groupCode}`
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(
				`Failed to get group details: ${response.statusText}`
			)
		}

		const data: getGroupDetailsType = await response.json()
		return data
	} catch (error) {
		console.error("Get Group Details Error:", error)
		throw error
	}
}
