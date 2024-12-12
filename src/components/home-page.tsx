import { Link } from "react-router-dom"
import Title from "./title"

type StudentTeacherHomePageProps = {
	teacher: boolean
	username: string
	showSmallTitle?: boolean
	showFrog?: boolean
}

export default function StudentTeacherHomePage({
	teacher,
	username,
	showSmallTitle = true,
	showFrog = false,
}: StudentTeacherHomePageProps) {
	const text = `Bok ${username},
    
    e-Motion je platforma za e-učenje emocija namijenjena djeci za lagano učenje kroz igru i natjecanja u timovima.`

	const teacherText = "Kreiraj natjecanje"
	const studentText = "Igraj natjecanje"

	return (
		<>
			<div className="mb-4">
				<Title
					showSmallTitle={showSmallTitle}
					showFrog={showFrog}
				/>
			</div>

			<div className="grid grid-cols-2 grid-rows-4 gap-6 mx-6">
				<div className="col-span-2 row-span-2 relative flex justify-center items-center bg-white rounded-3xl shadow-lg h-72 p-4">
					<pre className="font-hammersmith font-medium text-xl whitespace-pre-line leading-tight">
						{text}
					</pre>
					<div className="absolute top-40 right-0">
						<img
							src="/frog.png"
							alt="Frog"
							className="w-48 h-48"
						/>
					</div>
				</div>

				<div className="row-span-2 col-span-1 flex flex-col justify-center items-center bg-white rounded-2xl p-4 gap-2">
					<p className="font-hammersmith font-medium text-xl text-center">
						Prouči način igre i učenja
					</p>
					<img
						src="/magnifier.png"
						alt="Magnifier"
						className="w-18 h-18"
					/>
				</div>

				<div className="row-span-1 col-span-1 flex justify-center items-end bg-[#8b9af9] rounded-2xl p-4">
					<div className="relative bg-white rounded-2xl p-2">
						<div className="absolute bottom-16 left-6">
							<img
								src="/trophies.png"
								alt="Trophies"
								className="w-10 h-10"
							/>
						</div>
						<p className="font-hammersmith font-medium text-xl text-center">
							Prethodna natjecanja
						</p>
					</div>
				</div>

				<div className="row-span-1 col-span-1 flex justify-center items-start bg-[#f9d660] rounded-2xl p-3">
					<Link
						to={
							teacher
								? "/teacher/create-competition"
								: "/student/join-competition"
						}>
						<div className="relative bg-white rounded-2xl p-2">
							<div className="absolute top-2 right-2">
								<img
									src="/plus-icon.png"
									alt="Plus Icon"
									className="w-10 h-10"
								/>
							</div>
							<p className="font-hammersmith font-medium text-xl text-left">
								{teacher ? teacherText : studentText}
							</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}
