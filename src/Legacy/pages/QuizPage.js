import React, { useState } from "react";
import { useParams } from "react-router-dom";
import quizzes from "../data/quizzes";

function QuizPage() {
  const { quizId } = useParams();
  const quiz = quizzes[quizId];

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  if (!quiz) {
    return <div>Quiz not found.</div>;
  }

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    const scoreMap = {};

    Object.values(answers).forEach((val) => {
      scoreMap[val] = (scoreMap[val] || 0) + 1;
    });

    const topResult = Object.entries(scoreMap).sort((a, b) => b[1] - a[1])[0];
    setResult(topResult ? topResult[0] : null);
  };

  const allAnswered = quiz.questions.every((q) => answers[q.id]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{quiz.title}</h1>
      <p>{quiz.description}</p>

      <ol>
        {quiz.questions.map((q) => (
          <li key={q.id} style={{ marginBottom: "1.5rem" }}>
            <p><strong>{q.text}</strong></p>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {q.options.map((opt, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleAnswer(q.id, opt.value)}
                    style={{
                      margin: "0.25rem 0",
                      padding: "0.5rem 1rem",
                      backgroundColor: answers[q.id] === opt.value ? "#cce5ff" : "#eee",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    {opt.text}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {!result && allAnswered && (
        <button
          onClick={handleSubmit}
          style={{
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      )}

      {result && (
        <div style={{ marginTop: "2rem", padding: "1rem", border: "2px solid #007bff", borderRadius: "8px" }}>
          <h2>{result}</h2>
          <p>Based on your choices, you align most with {result}!</p>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
