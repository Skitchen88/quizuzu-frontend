import React from "react";
import { Link } from "react-router-dom";
import "./QuizCard.css";

function QuizCard({ id, title, description }) {
  return (
    <Link to={`/quiz/${id}`} className="quiz-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
}

export default QuizCard;
