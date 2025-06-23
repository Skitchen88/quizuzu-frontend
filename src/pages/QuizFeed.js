import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import quizlist from '../data/quizlist';
import SearchBar from '../components/SearchBar'; // <-- Make sure this file exists

function QuizFeed() {
  const { searchTerm } = useContext(SearchContext);

  const filtered = quizlist.filter(q =>
    q.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.keywords?.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div style={{ padding: '2rem' }}>
      <SearchBar />
      {searchTerm && <h1>Search Results for: "{searchTerm}"</h1>}
      {filtered.length > 0 ? (
        <ul>
          {filtered.map((quiz, index) => (
            <li key={index}>{quiz.topic}</li>
          ))}
        </ul>
      ) : (
        <p>No matching quizzes found.</p>
      )}
    </div>
  );
}

export default QuizFeed;
