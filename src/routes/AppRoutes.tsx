import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "@/pages/HomePage"
import NotFound from "@/pages/NotFoundPage"
import TeacherHome from "@/pages/teacher/TeacherHomePage"
import StudentHome from "@/pages/student/StudentHomePage"
import Layout from "@/layouts/Layout"

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
						path="/student"
						element={<StudentHome />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>{" "}
				</Routes>
			</Layout>
		</Router>
	)
}
