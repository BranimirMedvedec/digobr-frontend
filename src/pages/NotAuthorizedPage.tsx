import Title from "@/components/title"
import { Link } from "react-router-dom"

export default function NotAuthorized() {
	return (
		<div className="min-h-screen w-screen flex flex-col items-center justify-center gap-10">
			<div className="absolute top-4 w-full">
				<Title
					showSmallTitle={true}
					showFrog={true}
				/>
			</div>

			<div className="flex flex-col items-center justify-center mx-2 w-3/4 gap-4 p-4">
				<h2 className="font-alumni text-black text-4xl font-semibold uppercase text-center">
					Nemate pristup ovoj stranici
				</h2>

				<Link
					to="/"
					className="text-center text-white text-2xl font-gochi underline">
					vratite se na početnu stranicu
				</Link>
			</div>
		</div>
	)
}
