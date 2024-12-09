type TitleProps = {
	title?: string
	smallTitle?: string
	showSmallTitle?: boolean
}

export default function Title({
	title = "E-Motion",
	smallTitle = "e-motion",
	showSmallTitle = true,
}: TitleProps) {
	return (
		<div className="relative text-center p-4">
			<h1 className="text-8xl font-bold uppercase text-white drop-shadow-lg font-alumni">
				{title}
			</h1>
			{showSmallTitle && smallTitle && (
				<h2 className="absolute bottom-4 left-48 text-4xl text-pink-500 font-gochi font-semibold">
					{smallTitle}
				</h2>
			)}
		</div>
	)
}
