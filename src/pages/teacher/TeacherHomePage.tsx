import Title from "@/components/title"
import { getUsername } from "@/lib/auth-functions"
import { getCompetitionId, getCompetitionName } from "@/lib/store-functions"
import { Link } from "react-router-dom"

export default function TeacherHome() {
	const username = getUsername()
	const competitionId = getCompetitionId()
	const competitionName = getCompetitionName()
	const text = `Bok ${username},
    
    dobrodošli na platformu za e-učenje emocija namijenjenu djeci za lako usvajanje znanja kroz igru u timovima.`

	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center sm:w-[25rem] sm:m-auto">
			<Title
				showSmallTitle={true}
				showFrog={false}
			/>

			<div className="flex flex-col items-center justify-center">
				<div className="grid grid-cols-2 grid-rows-4 gap-6 mx-6 mb-5">
					<div className="col-span-2 row-span-2 relative flex justify-center items-start bg-white rounded-3xl shadow-lg h-72 p-8">
						<pre className="font-hammersmith font-medium text-xl whitespace-pre-line leading-tight">
							{text}
						</pre>
						<div className="absolute top-40 right-0">
							<img
								src="/frog.png"
								alt="Frog"
								className="h-48"
							/>
						</div>
					</div>

					<div className="row-span-1 col-span-1 flex justify-center items-end bg-gradient-to-r from-[#1EFF00] to-[#D0FF28] rounded-2xl p-4">
						<Link to="/teacher/how-to-play">
							<div className="relative bg-white rounded-2xl p-2">
								<div className="absolute bottom-16 left-2">
									<img
										src="/magnifier.png"
										alt="Magnifier"
										className="w-10 h-10"
									/>
								</div>
								<p className="font-hammersmith font-medium text-xl text-left">
									prouči pravila
								</p>
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
								<p className="font-hammersmith font-medium text-xl text-left">
									prethodna natjecanja
								</p>
							</div>
						</Link>
					</div>

					<div className="row-span-1 col-span-1 flex justify-center items-start bg-gradient-to-r from-[#FF0077] to-[#FB28FF] rounded-2xl p-4">
						{competitionId &&
						competitionId !== "null" &&
						competitionName ? (
							<Link
								to={`/teacher/competition/${competitionId}`}
								state={{ name: competitionName }}>
								<div className="relative bg-white rounded-2xl p-2">
									<div className="absolute top-14 left-0">
										<img
											src="/star.png"
											alt="Plus Icon"
											className="w-14 h-14"
										/>
									</div>
									<p className="font-hammersmith font-medium text-xl text-left">
										trenutno natjecanje
									</p>
								</div>
							</Link>
						) : (
							<div className="relative bg-white rounded-2xl p-2">
								<div className="absolute top-14 left-0">
									<img
										src="/star.png"
										alt="Plus Icon"
										className="w-14 h-14"
									/>
								</div>
								<p className="font-hammersmith font-medium text-xl text-left">
									pokreni natjecanje
								</p>
							</div>
						)}
					</div>

					<div className="row-span-1 col-span-1 flex justify-center items-start bg-[#f9d660] rounded-2xl p-3">
						<Link to="/teacher/create-competition">
							<div className="relative bg-white rounded-2xl p-2">
								<div className="absolute top-3 right-3">
									<img
										src="/plus-icon.png"
										alt="Plus Icon"
										className="w-6 h-6"
									/>
								</div>
								<p className="font-hammersmith font-medium text-xl text-left">
									kreiraj natjecanje
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
