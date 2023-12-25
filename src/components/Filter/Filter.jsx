import React, { useState, useEffect } from 'react';
import {
  ApplyFilterButton,
  CountryCheckboxContainer,
  CountryCheckboxInput,
  FilterTitle,
  BrandCheckboxInput,
  BrandCheckboxContainer,
  FiterContainer,
  FilterTitleHeader,
} from './Filter.styled';

const Filter = ({ products, applyBrandFilter, applyCountryFilter }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const uniqueBrands = Array.from(
      new Set(products.map(product => product.brand))
    );
    setBrands(uniqueBrands);

    const uniqueCountries = Array.from(
      new Set(products.map(product => product.country))
    );
    setCountries(uniqueCountries);
  }, [products]);

  const handleBrandChange = brand => {
    const updatedBrands = [...selectedBrands];
    if (updatedBrands.includes(brand)) {
      const index = updatedBrands.indexOf(brand);
      updatedBrands.splice(index, 1);
    } else {
      updatedBrands.push(brand);
    }
    setSelectedBrands(updatedBrands);
  };

  const handleCountryChange = country => {
    const updatedCountries = [...selectedCountries];
    if (updatedCountries.includes(country)) {
      const index = updatedCountries.indexOf(country);
      updatedCountries.splice(index, 1);
    } else {
      updatedCountries.push(country);
    }
    setSelectedCountries(updatedCountries);
  };

  const applyFilters = () => {
    applyBrandFilter(selectedBrands);
    applyCountryFilter(selectedCountries);
  };

  return (
    <FiterContainer>
      <FilterTitleHeader>Фільтри</FilterTitleHeader>
      <div>
        <FilterTitle>Бренди</FilterTitle>
        {brands.map(brand => (
          <BrandCheckboxContainer key={brand}>
            <BrandCheckboxInput
              type="checkbox"
              id={brand}
              name={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            <label htmlFor={brand}>{brand}</label>
          </BrandCheckboxContainer>
        ))}
      </div>
      <div>
        <FilterTitle>Країна-виробник</FilterTitle>
        {countries.map(country => (
          <CountryCheckboxContainer key={country}>
            <CountryCheckboxInput
              type="checkbox"
              id={country}
              name={country}
              checked={selectedCountries.includes(country)}
              onChange={() => handleCountryChange(country)}
            />
            <label htmlFor={country}>{country}</label>
          </CountryCheckboxContainer>
        ))}
      </div>
      <ApplyFilterButton onClick={applyFilters}>
        Застосувати фільтр
      </ApplyFilterButton>
    </FiterContainer>
  );
};

export default Filter;
