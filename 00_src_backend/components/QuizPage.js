import React from "react";
import { useParams } from "react-router-dom";
import quizzes from "../data";

function QuizPage() {
  const { id } = useParams();
  const quiz = quizzes.find((q) => q.id === parseInt(id));

  if (!quiz) return <div>Quiz not found.</div>;

  return (
    <div className="quiz-page">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>

      <ul>
        {quiz.questions.map((q, index) => (
          <li key={index}>
            <strong>{q.question}</strong>
            <ul>
              {q.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizPage;
