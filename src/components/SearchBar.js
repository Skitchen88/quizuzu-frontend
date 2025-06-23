import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <div style={{ padding: '1rem' }}>
      <input
        type="text"
        placeholder="Search quizzes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem',
          fontSize: '1rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
}

export default SearchBar;
