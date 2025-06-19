import React from 'react';

function SearchBar() {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <input
        type="text"
        placeholder="Search quizzes..."
        style={{
          width: '100%',
          padding: '0.75rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />
    </div>
  );
}

export default SearchBar;
