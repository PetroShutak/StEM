import React, { useState, useRef, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import {
  CatalogDropDownWrapper,
  SelectCatalogWrapper,
} from './CatalogDropDown.styled';

const CatalogDropDown = () => {
  const [showSelect, setShowSelect] = useState(false);

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
          <option value="">Ця</option>
          <option value="">функція</option>
          <option value="">поки</option>
          <option value="">не</option>
          <option value="">реалізована</option>
        </SelectCatalogWrapper>
      )}
    </CatalogDropDownWrapper>
  );
};

export default CatalogDropDown;
