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
          <option value="">Насоси</option>
          <option value="">Котли</option>
          <option value="">Бойлери</option>
          <option value="">Душові кабіни</option>
          <option value="">Ванни</option>
          <option value="">Кухонні мийки</option>
          <option value="">Каналізація</option>
          <option value="">Водопостачання</option>
        </SelectCatalogWrapper>
      )}
    </CatalogDropDownWrapper>
  );
};

export default CatalogDropDown;
