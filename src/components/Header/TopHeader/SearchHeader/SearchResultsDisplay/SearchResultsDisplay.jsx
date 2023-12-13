import React from 'react';
import { useSelector } from 'react-redux';
import ProductsItem from '../../../../ProductList/ProductItem/ProductItem';
import { SearchList } from './SearchResultsDisplay.styled';
import { selectSearchQuery } from 'redux/products/selectors';

const SearchResultsDisplay = ({ searchResults }) => {
  const searchQuery = useSelector(selectSearchQuery);
  return (
    <div>
      <h2
        style={{
          color: 'var(--text-color-primary-black)',
          fontFamily: 'var(--font-family-secondary)',
          marginBottom: '20px',
        }}
      >
        Результати пошуку: '{searchQuery}'{' '}
      </h2>
      <SearchList>
        {searchResults.map(result => (
          <ProductsItem
            key={result._id}
            id={result._id}
            name={result.name}
            brand={result.brand}
            image={result.image}
            price={result.price}
          />
        ))}
      </SearchList>
    </div>
  );
};

export default SearchResultsDisplay;
