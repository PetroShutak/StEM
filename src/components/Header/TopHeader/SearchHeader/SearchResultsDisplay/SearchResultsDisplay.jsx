import React from 'react';

const SearchResultsDisplay = ({ searchResults }) => {
  return (
    <div>
      <h2 style={{
        color: 'var(--text-color-primary-black)',
        fontFamily: 'var(--font-family-secondary)',
        marginBottom: '20px',
      }}
      >Результати пошуку</h2>
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultsDisplay;
