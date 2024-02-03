import React from 'react';
import { useSelector } from 'react-redux';
import { CloseButton, ModalWrapper } from './FilterModal.styled';
import Filter from '../Filter';
import WelcomeComponent from '../WelcomeComponent/WelcomeComponent';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const FilterModal = ({ isVisible, onClose, filterProps }) => {
  const isLogin = useSelector(selectIsLoggedIn);
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
