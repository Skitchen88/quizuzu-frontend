import React from 'react';
import SearchBar from './components/SearchBar';
import QuizOfTheWeek from './components/QuizOfTheWeek';
import RecentQuizzes from './components/RecentQuizzes';
import PopularQuizzes from './components/PopularQuizzes';
import QuizmosBanner from './components/QuizmosBanner';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🧠 Quizuzu</h1>
      <SearchBar />
      <QuizOfTheWeek />
      <RecentQuizzes />
      <PopularQuizzes />
      <QuizmosBanner />
    </div>
  );
}

export default App;
