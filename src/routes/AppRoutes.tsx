import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
} from "react-router-dom"
import Home from "@/pages/HomePage"
import NotFound from "@/pages/NotFoundPage"
import TeacherHome from "@/pages/teacher/TeacherHomePage"
import Layout from "@/layouts/Layout"
import CreateCompetition from "@/pages/teacher/CreateCompetitionPage"
import Competition from "@/pages/student/game/Competition.tsx"
import Explain from "@/pages/student/game/Explain.tsx"
import Guess from "@/pages/student/game/Guess.tsx"
import NotAuthorized from "@/pages/NotAuthorizedPage"
import AuthGuard from "@/components/auth/auth-guard"
import PublicGuard from "@/components/auth/public-guard"
import StudentHome from "@/pages/student/StudentHomePage"
import Competitions from "@/pages/teacher/CompetitionsPage"

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
						element={
							<AuthGuard allowedRoles={["teacher"]}>
								<Outlet />
							</AuthGuard>
						}>
						<Route
							index
							element={<TeacherHome />}
						/>
						<Route
							path="create-competition"
							element={<CreateCompetition />}
						/>
						<Route
							path="competitions"
							element={<Competitions />}
						/>
					</Route>

					<Route
						path="/student"
						element={
							<AuthGuard allowedRoles={["student"]}>
								<Outlet />
							</AuthGuard>
						}>
						<Route
							index
							element={<StudentHome />}
						/>
						<Route
							path="competition"
							element={<Competition gameLevel={5} />}
						/>
						<Route
							path="explain"
							element={<Explain />}
						/>
						<Route
							path="guess"
							element={<Guess />}
						/>
					</Route>

					<Route
						path="/not-authorized"
						element={<NotAuthorized />}
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
