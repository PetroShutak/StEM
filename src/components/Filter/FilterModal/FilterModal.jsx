import React from 'react';
import { CloseButton, ModalWrapper } from './FilterModal.styled';
import Filter from '../Filter';
import WelcomeComponent from '../WelcomeComponent/WelcomeComponent';

const FilterModal = ({ isVisible, onClose, filterProps }) => {
  const isLogin = false; // Змінити коли буде реалізована авторизація
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
      {!isLogin && <WelcomeComponent />}
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
