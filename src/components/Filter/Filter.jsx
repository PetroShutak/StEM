import React, { useState, useEffect } from 'react';
import { ApplyFilterButtton, BrandCheckboxContainer, BrandCheckboxInput, FilterTitle, FiterBrandContainer } from './Filter.styled';

const Filter = ({ products, applyFilter }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    const uniqueBrands = Array.from(
      new Set(products.map(product => product.brand))
    );
    setBrands(uniqueBrands);
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

  const applyFilterHandler = () => {
    applyFilter(selectedBrands);
  };

  return (
    <FiterBrandContainer>
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
      <ApplyFilterButtton onClick={applyFilterHandler}>Застосувати фільтр</ApplyFilterButtton>
    </FiterBrandContainer>
  );
};

export default Filter;
