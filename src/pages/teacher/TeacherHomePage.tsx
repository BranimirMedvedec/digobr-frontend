import Title from "@/components/title"

export default function TeacherHome() {
	const username = "Marina"
	const text = `Bok ${username},
    
    e-Motion je platforma za e-učenje emocija namijenjena djeci za lagano učenje kroz igru i natjecanja u timovima.`

	return (
		<div>
			<div className="mb-4">
				<Title showSmallTitle={true} />
			</div>

			<div className="flex justify-center">
				<div className="w-80 h-80 bg-white rounded-3xl shadow-lg p-5 flex flex-col items-center justify-center">
					<pre className="font-hammersmith font-medium text-xl whitespace-pre-line leading-tight">
						{text}
					</pre>
				</div>
			</div>
		</div>
	)
}
