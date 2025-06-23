import React from 'react';

function QuestionCard({ question, onAnswer }) {
  return (
    <div className="question-card">
      <h2>{question.text}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {question.options.map((option, index) => (
          <li key={index} style={{ margin: '0.5rem 0' }}>
            <button
              style={{
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                borderRadius: '4px',
                border: '1px solid #ccc',
                cursor: 'pointer'
              }}
              onClick={() => onAnswer(option.value)}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionCard;
