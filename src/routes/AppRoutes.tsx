import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/HomePage";
import NotFound from "@/pages/NotFoundPage";
import TeacherHome from "@/pages/teacher/TeacherHomePage";
import StudentHome from "@/pages/student/StudentHomePage";
import Layout from "@/layouts/Layout";
import CreateCompetition from "@/pages/teacher/CreateCompetitionPage";
import JoinCompetition from "@/pages/student/JoinCompetitionPage";
import Competition from "@/pages/student/Competition.tsx";

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<TeacherHome />} />
          <Route
            path="/teacher/create-competition"
            element={<CreateCompetition />}
          />
          <Route path="/student" element={<StudentHome />} />
          <Route
            path="/student/join-competition"
            element={<JoinCompetition />}
          />
          <Route
            path="/student/competition"
            element={<Competition gameLevel={1} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
