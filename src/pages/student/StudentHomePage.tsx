import StudentTeacherHomePage from "@/components/home-page"

export default function StudentHome() {
	return (
		<div>
			<StudentTeacherHomePage
				teacher={false}
				username="Student"
				showSmallTitle={true}
				showFrog={false}
			/>
		</div>
	)
}
