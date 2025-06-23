import React, { useState } from 'react';
import starWarsQuiz from '../data/quizzes/star-wars';
import QuestionCard from '../components/QuestionCard'; // Adjust path if needed

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const question = starWarsQuiz.questions[currentQuestionIndex];

  const handleAnswer = (value) => {
    setSelectedOption(value);
    console.log('Selected:', value);

    setTimeout(() => {
      if (currentQuestionIndex < starWarsQuiz.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
      } else {
        alert('Quiz complete!');
      }
    }, 500);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{starWarsQuiz.title}</h1>
      <p>{starWarsQuiz.description}</p>
      <QuestionCard question={question} onAnswer={handleAnswer} />
    </div>
  );
};

export default QuizPage;
