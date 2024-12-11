import { Link } from "react-router-dom"
import Title from "./title"

type StudentTeacherHomePageProps = {
	teacher: boolean
	username: string
}

export default function StudentTeacherHomePage({
	teacher,
	username,
}: StudentTeacherHomePageProps) {
	const text = `Bok ${username},
    
    e-Motion je platforma za e-učenje emocija namijenjena djeci za lagano učenje kroz igru i natjecanja u timovima.`

	const teacherText = "Kreiraj natjecanje"
	const studentText = "Prijavi se na natjecanje"

	return (
		<>
			<div className="mb-4">
				<Title
					showSmallTitle={true}
					showFrog={false}
				/>
			</div>

			<div className="grid grid-cols-2 grid-rows-4 gap-6 mx-6">
				<div className="col-span-2 row-span-2 flex justify-center items-center bg-white rounded-3xl shadow-lg h-72 p-4">
					<pre className="font-hammersmith font-medium text-xl whitespace-pre-line leading-tight">
						{text}
					</pre>
				</div>

				<div className="row-span-2 col-span-1 flex justify-center items-center bg-white rounded-2xl p-4">
					<p className="font-hammersmith font-medium text-xl text-center">
						Prouči način igre i učenja
					</p>
				</div>

				<div className="row-span-1 col-span-1 flex justify-center items-end bg-[#8b9af9] rounded-2xl p-4">
					<div className=" bg-white rounded-2xl p-2">
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
						<div className=" bg-white rounded-2xl p-2">
							<p className="font-hammersmith font-medium text-xl text-center">
								{teacher ? teacherText : studentText}
							</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}
