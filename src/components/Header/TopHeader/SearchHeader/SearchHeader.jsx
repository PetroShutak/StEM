import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllProducts,
  selectSearchQuery,
} from '../../../../redux/products/selectors';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
  SearchHeaderWrapper,
  SearchHeaderInput,
  SearchHeaderButton,
  SearchResultList,
  SearchResultItem,
  SearchHeaderForm,
} from './SearchHeader.styled';
import { useDispatch } from 'react-redux';
import {
  setSearchResult,
  setSearchQuery,
  // resetSearchResult,
} from '../../../../redux/products/searchSlice';
import { notifyNoSearchResults } from 'utils/toasts';

const SearchHeader = ({ onSearchRedirect }) => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  const searchQuery = useSelector(selectSearchQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

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
    dispatch(setSearchQuery(value));
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

  const handleSearch = value => {
    const filteredResults = allProducts.filter(product =>
      Object.values(product).some(
        field =>
          typeof field === 'string' &&
          field.toLowerCase().includes(value.toLowerCase())
      )
    );
    dispatch(setSearchResult(filteredResults));
    if (filteredResults.length === 0) {
      notifyNoSearchResults();
    }
  };

  const handleResultItemClick = result => {
    dispatch(setSearchQuery(''));
    setShowResults(false);
    handleSearch(result.name);
    onSearchRedirect('/searchresult');
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      setShowResults(false);
      handleSearch(searchQuery);
      onSearchRedirect('/searchresult');
    }
  };

  const uniqueResults = [...new Map(searchResults.map(item => [item.name, item])).values()];

  return (
    <SearchHeaderWrapper ref={searchRef}>
      <SearchHeaderForm onSubmit={handleSearchSubmit}>
        <SearchHeaderInput
          type="text"
          placeholder="Пошук"
          value={searchQuery}
          onChange={handleSearchChange}
          validate={searchQuery}
        />
        <SearchHeaderButton type="submit" disabled={!searchQuery.trim()}>
          <BiSearchAlt2 size={28} />
        </SearchHeaderButton>
      </SearchHeaderForm>
      {showResults && searchResults.length > 0 && (
        <SearchResultList>
          {uniqueResults.slice(0, 6).map(result => (
            <SearchResultItem
              key={result._id}
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
