import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../../../redux/products/selectors';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
  SearchHeaderWrapper,
  SearchHeaderInput,
  SearchHeaderButton,
  SearchResultList,
  SearchResultItem,
} from './SearchHeader.styled';
import { useDispatch } from 'react-redux';
import {
  setSearchResult,
  resetSearchResult,
} from '../../../../redux/products/searchSlice';

const SearchHeader = () => {
  const allProducts = useSelector(selectAllProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOutsideClick = event => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleSearchChange = async event => {
    const { value } = event.target;
    setSearchQuery(value);

    try {
      const filteredResults = allProducts.filter(product =>
        Object.values(product).some(
          field =>
            typeof field === 'string' &&
            field.toLowerCase().includes(value.toLowerCase())
        )
      );
      setSearchResults(filteredResults);
      setShowResults(true);
      dispatch(setSearchResult(filteredResults));
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSearch = (value) => {
    const filteredResults = allProducts.filter(
      product => product.name.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setSearchResult(filteredResults));
  };
  
  const handleResultItemClick = (result) => {
    setSearchQuery(result.name);
    setShowResults(false);
    handleSearch(result.name); 
  };
  
  const handleSearchSubmit = event => {
    event.preventDefault();
    console.log('Search submitted');
    setShowResults(false);
    handleSearch(searchQuery); 
  };

  if (searchQuery === '') {
    dispatch(resetSearchResult());
  }

  return (
    <SearchHeaderWrapper ref={searchRef}>
      <form onSubmit={handleSearchSubmit}>
        <SearchHeaderInput
          type="text"
          placeholder="Пошук"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <SearchHeaderButton type="submit">
          <BiSearchAlt2 size={28} />
        </SearchHeaderButton>
      </form>
      {showResults && searchResults.length > 0 && (
        <SearchResultList>
          {searchResults.map(result => (
            <SearchResultItem
              key={result.id}
              onClick={() => handleResultItemClick(result)}
            >
              {result.name}
            </SearchResultItem>
          ))}
        </SearchResultList>
      )}
    </SearchHeaderWrapper>
  );
};

export default SearchHeader;
