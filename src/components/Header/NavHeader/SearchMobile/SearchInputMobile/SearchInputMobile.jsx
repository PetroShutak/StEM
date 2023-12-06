import React, { useState, useEffect, useRef } from 'react';
import {
  SearchMobileInputWrapper,
  Backdrop,
  SearchMobileInput,
  SearchMobileInputButton,
  SearchResultList,
  SearchResultItem,
} from './SearchInputMobile.styled';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts } from '../../../../../redux/products/selectors';
import {
  setSearchResult,
  resetSearchResult,
} from '../../../../../redux/products/searchSlice';

const SearchInputMobile = ({ setOpen, onSearchRedirect }) => {
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
      onSearchRedirect('/catalog');
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSearch = value => {
    const filteredResults = allProducts.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setSearchResult(filteredResults));
  };

  const handleResultItemClick = result => {
    setSearchQuery(result.name);
    setShowResults(false);
    handleSearch(result.name);
    setOpen(false);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    setShowResults(false);
    handleSearch(searchQuery);
    setOpen(false);
  };

  if (searchQuery === '') {
    dispatch(resetSearchResult());
  }

  const submitSearch = () => {
    setOpen(false);
  };

  const handleCloseSearch = event => {
    if (event.target.classList.contains('backdrop')) {
      setOpen(false);
    }
  };

  return (
    <Backdrop className="backdrop" onClick={handleCloseSearch}>
      <SearchMobileInputWrapper ref={searchRef}>
        <form onSubmit={handleSearchSubmit}>
          <SearchMobileInput
            type="text"
            placeholder="Пошук..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <SearchMobileInputButton type="submit">
            <BiSearchAlt2 size={28} onClick={submitSearch} />
          </SearchMobileInputButton>
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
      </SearchMobileInputWrapper>
    </Backdrop>
  );
};

export default SearchInputMobile;
