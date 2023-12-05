import React from 'react';
import ProductsItem from '../../../../ProductList/ProductItem/ProductItem';
import { SearchList } from './SearchResultsDisplay.styled';

const SearchResultsDisplay = ({ searchResults }) => {
  return (
    <div>
      <h2 style={{
        color: 'var(--text-color-primary-black)',
        fontFamily: 'var(--font-family-secondary)',
        marginBottom: '20px',
      }}
      >Результати пошуку</h2>
      <SearchList>
        {searchResults.map(result => (
          <ProductsItem
            key={result.id}
            id={result.id}
            name={result.name}
            image={result.image}
            description={result.description}
            price={result.price}
            category={result.category}
            subcategory={result.subcategory}
        />
        ))}
      </SearchList>
    </div>
  );
};

export default SearchResultsDisplay;
