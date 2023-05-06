import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "../../screens/Home/Home";
import { QuestionsFormScreen } from "../../screens/Questions/QuestionsForm";
import { ScoreScreen } from "../../screens/Score/Score";
import { HOME, QUESTIONS, SCORE } from "./paths";

export function RoutesPages() {
  return (
    <Routes>
      <Route path={`${HOME}*`} element={<HomeScreen />} />
      <Route path={`${QUESTIONS}`} element={<QuestionsFormScreen />} />
      <Route path={`${SCORE}`} element={<ScoreScreen />} />
    </Routes>
  );
}
