export default function TeacherHome() {
	return (
		<div>
<<<<<<< Updated upstream
			<h1>Teacher Home page</h1>
=======
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

				{/* Second rectangle: spans 2 rows in the left column */}
				<div className="row-span-2 col-span-1 flex justify-center items-center bg-white rounded-2xl p-4">
					<p className="font-hammersmith font-medium text-xl text-center">
						Prouči način igre i učenja
					</p>
				</div>

				{/* Third rectangle: spans 1 row in the right column */}
				<div className="row-span-1 col-span-1 flex justify-center items-end bg-[#8b9af9] rounded-2xl p-4">
					<div className=" bg-white rounded-2xl p-2">
						<p className="font-hammersmith font-medium text-xl text-center">
							Prethodna natjecanja
						</p>
					</div>
				</div>

				{/* Fourth rectangle: spans 1 row in the right column */}
				<div className="row-span-1 col-span-1 flex justify-center items-start bg-[#f9d660] rounded-2xl p-3">
					<div className=" bg-white rounded-2xl p-2">
						<p className="font-hammersmith font-medium text-xl text-center">
							Kreiraj natjecanje
						</p>
					</div>
				</div>
			</div>
>>>>>>> Stashed changes
		</div>
	)
}
