import Title from "@/components/title"
import { getUsername } from "@/lib/auth-functions"
import { Link } from "react-router-dom"

export default function TeacherHome() {
	const username = getUsername()
	const text = `Bok ${username},
    
    e-Motion je platforma za e-učenje emocija namijenjena djeci za lagano učenje kroz igru i natjecanja u timovima.`

	return (
		<div className="min-h-screen w-screen flex flex-col items-center justify-center">
			<div className="absolute top-4 w-full">
				<Title
					showSmallTitle={true}
					showFrog={false}
				/>
			</div>

			<div className="flex flex-col items-center justify-center">
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

					<div className="row-span-2 col-span-1 flex flex-col justify-center items-center bg-white rounded-2xl p-4">
						<Link to="/teacher/how-to-play">
							<div className="flex flex-col justify-center items-center gap-2">
								<p className="font-hammersmith font-medium text-xl text-center">
									Prouči način igre i učenja
								</p>
								<img
									src="/magnifier.png"
									alt="Magnifier"
									className="w-12 h-12"
								/>
							</div>
						</Link>
					</div>

					<div className="row-span-1 col-span-1 flex justify-center items-end bg-[#8b9af9] rounded-2xl p-4">
						<Link to="/teacher/competitions">
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
						</Link>
					</div>

					<div className="row-span-1 col-span-1 flex justify-center items-start bg-[#f9d660] rounded-2xl p-3">
						<Link to="/teacher/create-competition">
							<div className="relative bg-white rounded-2xl p-2">
								<div className="absolute top-2 right-2">
									<img
										src="/plus-icon.png"
										alt="Plus Icon"
										className="w-10 h-10"
									/>
								</div>
								<p className="font-hammersmith font-medium text-xl text-left">
									Kreiraj natjecanje
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
