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
      <p>Каталог</p>
      <RiArrowDropDownLine size={32} color="gray" />
      {showSelect && (
        <SelectCatalogWrapper ref={selectRef}>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
        </SelectCatalogWrapper>
      )}
    </CatalogDropDownWrapper>
  );
};

export default CatalogDropDown;
