import { Emotion } from "@/models/emotion"
import { QuestionInfo } from "@/models/question-info"

export const setStudentGroup = (group: string): void => {
	localStorage.setItem("group", group)
}

export const getStudentGroup = (): string | null => {
	const group = localStorage.getItem("group")
	return group ? group : null
}

export const removeStudentGroup = (): void => {
	localStorage.removeItem("group")
}

export const setStudentColor = (color: string): void => {
	localStorage.setItem("group-color", color)
}

export const getStudentColor = (): string | null => {
	const color = localStorage.getItem("group-color")
	return color ? color : null
}

export const removeStudentColor = (): void => {
	localStorage.removeItem("group-color")
}

export const setCompetitionLevel = (level: number): void => {
	localStorage.setItem("competitionLevel", level.toString())
}

export const getCompetitionLevel = (): number | null => {
	const level = localStorage.getItem("competitionLevel")
	return level ? parseInt(level) : null
}

export const removeCompetitionLevel = (): void => {
	localStorage.removeItem("competitionLevel")
}

export const competitionFinished = (): void => {
	removeStudentGroup()
	removeCompetitionLevel()
	removeCompetitionId()
	removeQuestionData()
}

type QuestionData = Emotion & {
	imitationImage: QuestionInfo
} & {
	guessingImages: QuestionInfo[] | null
}

export const setQuestionData = (data: QuestionData): void => {
	localStorage.setItem("questionData", JSON.stringify(data))
}

export const getQuestionData = (): QuestionData | null => {
	const data = localStorage.getItem("questionData")
	return data ? JSON.parse(data) : null
}

export const removeQuestionData = (): void => {
	localStorage.removeItem("questionData")
}

export const setCompetitionId = (id: string): void => {
	localStorage.setItem("competitionId", id)
}

export const getCompetitionId = (): string | null => {
	const id = localStorage.getItem("competitionId")
	return id ? id : null
}

export const removeCompetitionId = (): void => {
	localStorage.removeItem("competitionId")
}
