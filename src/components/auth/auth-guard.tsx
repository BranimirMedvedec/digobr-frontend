import { ReactNode } from "react"
import { getRole, userIsLoggedIn } from "@/lib/auth-functions"
import { Navigate } from "react-router-dom"

type AuthGuardProps = {
	children: ReactNode
	allowedRoles?: string[]
}

export default function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
	const isAuthenticated = userIsLoggedIn()

	if (!isAuthenticated) {
		return (
			<Navigate
				to="/"
				replace
			/>
		)
	}

	const role = getRole()

	if (
		isAuthenticated &&
		allowedRoles &&
		!allowedRoles?.includes(role || "")
	) {
		return (
			<Navigate
				to="/not-authorized"
				replace
			/>
		)
	}

	return <>{children}</>
}
