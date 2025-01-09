import { ReactNode } from "react"
import { getRole, userIsLoggedIn } from "@/lib/auth-functions"
import { Navigate } from "react-router-dom"

type PublicGuardProps = {
	children: ReactNode
}

export default function PublicGuard({ children }: PublicGuardProps) {
	const isAuthenticated = userIsLoggedIn()

	if (isAuthenticated) {
		const role = getRole()

		if (role === "teacher")
			return (
				<Navigate
					to="/teacher"
					replace
				/>
			)

		if (role === "student")
			return (
				<Navigate
					to="/student"
					replace
				/>
			)
	}

	return <>{children}</>
}
