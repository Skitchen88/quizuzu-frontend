// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import QuizFeed from './pages/QuizFeed';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Profile from './pages/Profile';         // ✅ Import Profile
import QuizBuilder from './pages/QuizBuilder'; // ✅ Import QuizBuilder

import { SearchProvider } from './context/SearchContext';
import { UserProvider } from './context/UserContext';
import TopBar from './components/TopBar';

function App() {
  return (
    <UserProvider>
      <SearchProvider>
        <Router>
          <TopBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz/:quizNumber" element={<QuizPage />} />
            <Route path="/quiz-feed" element={<QuizFeed />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz-builder" element={<QuizBuilder />} /> {/* ✅ New route */}
          </Routes>
        </Router>
      </SearchProvider>
    </UserProvider>
  );
}

export default App;
