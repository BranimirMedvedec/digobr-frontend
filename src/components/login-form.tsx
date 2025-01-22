import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { FormEvent, useState } from "react"
import { saveUserInfo } from "@/lib/auth-functions"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select"
import { useNavigate } from "react-router-dom"
import { login } from "@/lib/functions"
import { useToast } from "@/hooks/use-toast"

export default function LoginForm() {
	const [username, setUsername] = useState("")
	const [role, setRole] = useState<"teacher" | "student" | "">("")
	const navigate = useNavigate()
	const [usernameMessage, setUsernameMessage] = useState("")
	const [roleMessage, setRoleMessage] = useState("")
	const { toast } = useToast()

	async function handleSubmit(e: FormEvent) {
		e.preventDefault()
		if (username.length <= 4 || role === "") {
			if (username.length <= 4)
				setUsernameMessage("Korisničko ime mora imati više od 4 znaka")

			if (role === "") setRoleMessage("Morate odabrati ulogu")

			return
		}
		setUsernameMessage("")
		setRoleMessage("")

		try {
			const successLogin = await login(username, role)
			if (!successLogin) {
				toast({
					title: "Neuspješna prijava",
					description: "Pokušajte ponovo",
					variant: "destructive",
					className: "bg-black text-white border-1 rounded-xl",
					duration: 2500,
				})
				return
			}
			saveUserInfo({ username, role })
			navigate(role === "teacher" ? "/teacher" : "/student", {
				replace: true,
			})
		} catch (error) {
			console.log("Error saving user info: ", error)
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center justify-center gap-4">
			<Input
				type="text"
				placeholder="Korisničko ime"
				className=" text-lg font-light font-hammersmith text-black border-2 border-white rounded-xl p-5 shadow-lg bg-blue-300 focus:bg-blue-200"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			{usernameMessage && (
				<span className="text-red-500 text-sm font-bold">
					{usernameMessage}
				</span>
			)}
			<Select
				value={role}
				onValueChange={(value) =>
					setRole(value as "teacher" | "student")
				}>
				<SelectTrigger className=" text-lg font-hammersmith text-black border-2 border-white rounded-xl p-5 shadow-lg bg-blue-300">
					<SelectValue placeholder="Uloga" />
				</SelectTrigger>
				<SelectContent className="text-lg font-hammersmith text-black border-2 border-white rounded-xl shadow-lg bg-blue-300">
					<SelectItem
						value="teacher"
						className="text-lg font-hammersmith text-black">
						Učitelj
					</SelectItem>
					<SelectItem
						value="student"
						className="text-lg font-hammersmith text-black">
						Učenik
					</SelectItem>
				</SelectContent>
			</Select>
			{roleMessage && (
				<span className="text-red-500 text-sm font-bold">
					{roleMessage}
				</span>
			)}
			<Button
				// disabled={username.length <= 4 || role === ""}
				type="submit"
				className=" border-white text-black font-hammersmith font-medium text-lg rounded-xl border-2 p-5 shadow-lg bg-red-300">
				Prijavi se
			</Button>
		</form>
	)
}
