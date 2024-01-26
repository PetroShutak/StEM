import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiCategory } from 'react-icons/bi';
import {
  CatalogDropDownWrapper,
  SelectCatalogWrapper,
} from './CatalogDropDown.styled';
import { selectAllProducts } from 'redux/products/selectors';

const CatalogDropDown = () => {
  const [showSelect, setShowSelect] = useState(false);
  const products = useSelector(selectAllProducts);
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768; // 768px

  const handleCategoryClick = category => {
    if (category === 'categories') {
      navigate('/catalog/categories');
    } else {
      // navigate(`/catalog/category/${category}`);
      const encodedCategory = encodeURIComponent(category);
      navigate(`/catalog/category/${encodedCategory}`);
    }
  };

  const handleCatalogClick = () => {
    navigate(`/catalog`);
  };

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
      {isMobile ? (
        <BiCategory size={32} color="var(--text-color-secondary-grey)" />
      ) : (
        <RiArrowDropDownLine size={32} color="gray" />
      )}
      {/* <RiArrowDropDownLine size={32} color="gray" /> */}
      {showSelect && (
        <SelectCatalogWrapper ref={selectRef}>
          <ul>
            <li onClick={() => handleCategoryClick('categories')}>
              Всі категорії
            </li>
            <li onClick={() => handleCatalogClick()}>Весь каталог...</li>
          </ul>
          <ul>
            {uniqueCategories.map(category => (
              <li key={category} onClick={() => handleCategoryClick(category)}>
                {category}
              </li>
            ))}
          </ul>
        </SelectCatalogWrapper>
      )}
    </CatalogDropDownWrapper>
  );
};

export default CatalogDropDown;
