import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen w-screen bg-gradient-to-b from-[hsla(113,96%,81%,1)] to-[hsla(188,90%,51%,1)]">
			{children}
		</div>
	)
}
