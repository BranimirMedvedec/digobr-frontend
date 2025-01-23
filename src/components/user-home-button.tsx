import { getRole } from "@/lib/auth-functions"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

export default function UserHomeButton() {
	const navigate = useNavigate()
	const role = getRole()

	const handleHome = () => {
		try {
			console.log("Navigating to home page")
			navigate(`/${role}`, { replace: true })
		} catch (error) {
			console.log("Error navigating to home page:", error)
		}
	}

	return (
		<Button
			className="bg-orange-300 text-black font-hammersmith font-medium text-lg rounded-xl border-2 border-white p-5 shadow-lg"
			onClick={handleHome}>
			Početna
		</Button>
	)
}
