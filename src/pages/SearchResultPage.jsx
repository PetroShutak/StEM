import SearchResultsDisplay from 'components/Header/TopHeader/SearchHeader/SearchResultsDisplay/SearchResultsDisplay';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchResults } from 'redux/products/selectors';

const SearchResultPage = () => {
  const searchResults = useSelector(selectSearchResults);
  return (
    <div
      style={{
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
    >
      {searchResults.length === 0 ? (
        <h2
          style={{
            color: 'var(--text-color-primary-black)',
            fontFamily: 'var(--font-family-secondary)',
            marginBottom: '20px',
          }}
        >
          Нічого не знайдено. Спробуй ще.
        </h2>
      ) : (
        <SearchResultsDisplay searchResults={searchResults} />
      )}
    </div>
  );
};

export default SearchResultPage;
