import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    border: `1px solid var(--bg-secondary)`,
    backgroundColor: 'white',
    color: 'var(text-color-primary-black)',
    '&:hover': {
      borderColor: 'var(--bg-secondary)',
    },
    width: '250px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    outline: 'none',
    fontFamily: 'var(--font-family-secondary)',
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: state.isSelected ? 'var(--bg-secondary)' : 'white',
    color: 'var(text-color-primary-black)',
    '&:hover': {
      backgroundColor: 'var(--bg-secondary)',
      color: 'white',
    },
    fontSize: '16px',
    fontWeight: '500',
    outline: 'none',
    fontFamily: 'var(--font-family-secondary)',
  }),

  menu: (provided, state) => ({
    ...provided,
    width: '260px',
    backgroundColor: 'white',
    color: '#333',
    border: `1px solid var(--bg-secondary)`,
    borderRadius: '8px',
    outline: 'none',
    fontFamily: 'var(--font-family-secondary)',
  }),
};

const SortSelect = ({ sortProductByPrice, sortProductByRaiting }) => {
  const options = [
    { value: '1', label: 'від дешевших до дорожчих' },
    { value: '2', label: 'від дорожчих до дешевших' },
    { value: '3', label: 'популярні' },
  ];

  const handlePriceChange = e => {
    const value = e.value;
    if (value === '1') {
      sortProductByPrice('asc');
    } else if (value === '2') {
      sortProductByPrice('desc');
    } else if (value === '3') {
      sortProductByRaiting('asc');
    }
  };

  return (
    <SelectWrapper>
      <Select
        placeholder="Сортувати..."
        isSearchable={false}
        styles={customStyles}
        options={options}
        onChange={handlePriceChange}
      />
    </SelectWrapper>
  );
};

export default SortSelect;
