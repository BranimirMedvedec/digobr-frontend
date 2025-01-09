import { Link } from "react-router-dom"

type TitleProps = {
	title?: string
	smallTitle?: string
	showSmallTitle?: boolean
	showFrog?: boolean
}

export default function Title({
	title = "E-Motion",
	smallTitle = "e-Motion",
	showSmallTitle = true,
	showFrog = true,
}: TitleProps) {
	return (
		<div className="relative text-center p-4">
			<Link to="/">
				{/* Main Title Container */}
				<div className="relative flex justify-center items-center">
					<h1 className="text-8xl font-bold uppercase text-white drop-shadow-lg font-alumni">
						{title}
					</h1>
					{/* Small Title */}
					{showSmallTitle && (
						<h2 className="absolute text-4xl font-gochi font-medium text-[#E127E7] top-[60%] left-[60%] transform -translate-x-1/2">
							{smallTitle}
						</h2>
					)}
					{/* Frog Image */}
					{showFrog && (
						<img
							src="/frog.png"
							alt="Title Frog"
							className="absolute top-[0%] left-[23%] transform -translate-x-1/2 w-28 h-28"
						/>
					)}
				</div>
			</Link>
		</div>
	)
}
