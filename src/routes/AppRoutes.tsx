import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "@/pages/HomePage"
import NotFound from "@/pages/NotFoundPage"
import TeacherHome from "@/pages/teacher/TeacherHomePage"
import StudentHome from "@/pages/student/StudentHomePage"
import Layout from "@/layouts/Layout"
import CreateCompetition from "@/pages/teacher/CreateCompetitionPage"
import JoinCompetition from "@/pages/student/JoinCompetitionPage"
import Competition from "@/pages/student/game/Competition.tsx"
import Explain from "@/pages/student/game/Explain.tsx"
import Guess from "@/pages/student/game/Guess.tsx"

export default function AppRoutes() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/teacher"
						element={<TeacherHome />}
					/>
					<Route
						path="/teacher/create-competition"
						element={<CreateCompetition />}
					/>
					<Route
						path="/student"
						element={<StudentHome />}
					/>
					<Route
						path="/student/join-competition"
						element={<JoinCompetition />}
					/>
					<Route
						path="/student/competition"
						element={<Competition gameLevel={5} />}
					/>
					<Route
						path="/student/explain"
						element={<Explain />}
					/>
					<Route
						path="/student/guess"
						element={<Guess />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</Layout>
		</Router>
	)
}
