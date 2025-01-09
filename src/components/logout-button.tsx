import { removeUserInfo } from "@/lib/auth-functions"
import { Button } from "./ui/button"

export default function LogoutButton() {
	const handleLogout = () => () => {
		try {
			removeUserInfo()
			window.location.reload()
		} catch (error) {
			console.log("Error removing user info: ", error)
		}
	}

	return (
		<Button
			className="bg-fuchsia-400 text-black font-hammersmith font-medium text-lg rounded-xl border-2 border-white p-5 shadow-lg"
			onClick={handleLogout()}>
			Logout
		</Button>
	)
}
