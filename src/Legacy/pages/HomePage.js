import React from "react";
import { Link } from "react-router-dom";
import starWarsQuiz from "../data/quizzes/star-wars";

const allQuizzes = [
  {
    id: "star-wars",
    title: "Find the Force Within: Your Star Wars Identity",
    description: "Which Star Wars character matches your inner force?",
    data: starWarsQuiz,
  },
  // Add more quiz objects here as you go
];

function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Quizuzu Quizzes</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {allQuizzes.map((quiz) => (
          <Link
            key={quiz.id}
            to={`/quiz/${quiz.id}`}
            style={{
              padding: "1rem",
              border: "1px solid #ccc",
              textDecoration: "none",
              color: "#333",
              borderRadius: "8px",
            }}
          >
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
