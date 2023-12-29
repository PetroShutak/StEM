import React from 'react';
import { CloseButton, ModalWrapper } from './FilterModal.styled';
import Filter from '../Filter';

const FilterModal = ({ isVisible, onClose, filterProps }) => {
  const {
    allProducts,
    applyBrandFilter,
    applyCountryFilter,
    applyPriceFilter,
    resetFilters,
  } = filterProps;

  const applyFilters = () => {
    closeModal();
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <ModalWrapper isVisible={isVisible}>
      <Filter
        applyFilters={applyFilters}
        products={allProducts}
        applyBrandFilter={applyBrandFilter}
        applyCountryFilter={applyCountryFilter}
        applyPriceFilter={applyPriceFilter}
        closeModal={closeModal}
        resetFilters={resetFilters}
      />
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </ModalWrapper>
  );
};

export default FilterModal;
