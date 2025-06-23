import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizPage"; // Generic dynamic quiz engine
import HomePage from "./pages/HomePage"; // Lists all quizzes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;
