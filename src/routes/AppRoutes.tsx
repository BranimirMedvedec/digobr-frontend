import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "@/pages/HomePage";
import NotFound from "@/pages/NotFoundPage";
import TeacherHome from "@/pages/teacher/TeacherHomePage";
import Layout from "@/layouts/Layout";
import CreateCompetition from "@/pages/teacher/CreateCompetitionPage";
import Competition from "@/pages/student/game/Competition.tsx";
import Explain from "@/pages/student/game/Explain.tsx";
import Guess from "@/pages/student/game/Guess.tsx";
import NotAuthorized from "@/pages/NotAuthorizedPage";
import AuthGuard from "@/components/auth/auth-guard";
import StudentHome from "@/pages/student/StudentHomePage";
import CurrentCompetition from "@/pages/teacher/CurrentCompetition.tsx";
import Competitions from "@/pages/teacher/CompetitionsPage";
import { Toaster } from "@/components/ui/toaster";
import HowToPlay from "@/pages/teacher/HowToPlay.tsx";
import CorrectAnswer from "@/pages/student/game/CorrectAnswer.tsx";
import WrongAnswer from "@/pages/student/game/WrongAnswer.tsx";
import MultipleAnswer from "@/pages/student/game/MultipleAnswer.tsx";
import RoundResults from "@/pages/student/game/RoundResults.tsx";

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/teacher"
            element={
              <AuthGuard allowedRoles={["teacher"]}>
                <Outlet />
              </AuthGuard>
            }
          >
            <Route index element={<TeacherHome />} />
            <Route path="create-competition" element={<CreateCompetition />} />
            <Route
              path="competition/:id"
              element={<CurrentCompetition />}
            />
            <Route path="competitions" element={<Competitions />} />
            <Route path="how-to-play" element={<HowToPlay />} />
          </Route>

          <Route
            path="/student"
            element={
              <AuthGuard allowedRoles={["student"]}>
                <Outlet />
              </AuthGuard>
            }
          >
            <Route index element={<StudentHome />} />
            <Route path="competition" element={<Outlet />}>
              <Route index element={<Competition />} />
              <Route path="explain" element={<Explain />} />
              <Route path="guess" element={<Guess />} />
              <Route path="answer" element={<MultipleAnswer />} />
              <Route path="correct-answer" element={<CorrectAnswer />} />
              <Route path="wrong-answer" element={<WrongAnswer />} />
              <Route path="results" element={<RoundResults />} />
            </Route>
          </Route>

          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
