import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RiArrowDropDownLine } from 'react-icons/ri';
import {
  CatalogDropDownWrapper,
  SelectCatalogWrapper,
} from './CatalogDropDown.styled';
import { selectAllProducts } from 'redux/products/selectors';

const CatalogDropDown = () => {
  const [showSelect, setShowSelect] = useState(false);
  const products = useSelector(selectAllProducts);

  const uniqueCategories = [
    ...new Set(products.map(product => product.category)),
  ];

  const selectRef = useRef(null);

  const toggleSelect = () => {
    setShowSelect(!showSelect);
  };

  const handleClickOutside = event => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setShowSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <CatalogDropDownWrapper onClick={toggleSelect}>
      <p>Категорії</p>
      <RiArrowDropDownLine size={32} color="gray" />
      {showSelect && (
        <SelectCatalogWrapper ref={selectRef}>
          <ul>
            <li>Всі категорії</li>
          </ul>
          <ul>
            {uniqueCategories.map(category => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </SelectCatalogWrapper>
      )}
    </CatalogDropDownWrapper>
  );
};

export default CatalogDropDown;
