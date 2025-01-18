import { io, Socket } from "socket.io-client"

const SOCKET_URL = "http://127.0.0.1:9092"

let socket: Socket | null = null

// Open socket connection
export const openSocketConnection = () => {
	if (socket) return

	socket = io(SOCKET_URL, {
		transports: ["websocket"],
	})
}

// Close socket connection
export const closeSocketConnection = () => {
	if (!socket) return

	socket.disconnect()
	socket = null
}

// Add user to room
export const joinRoom = (room: string) => {
	if (!socket) return

	socket.emit("joinRoom", room)
}

// User leaves room
export const leaveRoom = (room: string) => {
	if (!socket) return

	socket.emit("leaveRoom", room)
}

// Subscribe to a specific topic (event)
export const subscribeToEvent = (
	event: string,
	callback: (data: any) => void
) => {
	if (!socket) return

	socket.on(event, callback)
}

// Unsubscribe from a specific topic (event)
export const unsubscribeFromEvent = (event: string) => {
	if (!socket) return

	socket.off(event)
}

// Notify start of guessing for a group
export const notifyStartGuessing = (groupCode: string) => {
	if (!socket) return

	socket.emit("startGuessing", groupCode)
}

// Notify end of guessing for a group
export const notifyGuessingOver = (groupCode: string) => {
	if (!socket) return

	socket.emit("guessingOver", groupCode)
}
