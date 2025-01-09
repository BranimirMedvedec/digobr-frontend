import JoinGroupForm from "@/components/join-group-form"
import Title from "@/components/title"

export default function StudentHome() {
	return (
		<div className="min-h-screen w-screen flex flex-col items-center justify-center">
			<div className="absolute top-4 w-full">
				<Title
					showSmallTitle={true}
					showFrog={false}
				/>
			</div>

			<JoinGroupForm />
		</div>
	)
}
