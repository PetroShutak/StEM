import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllProducts,
  selectError,
  selectLoading,
} from 'redux/products/selectors';
import {
  CatalogPageWrapper,
  FilterBtnTitleMobileContainer,
  FilterButton,
  FilterWrapper,
  NoProductsMessage,
  ProductListTitle,
  ProductListWrapper,
  ResetButton,
} from 'components/PageStyled/CatalogPage.styled';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ProductList from 'components/ProductList/ProductList';
import FilterModal from 'components/Filter/FilterModal/FilterModal';

const CatalogPage = () => {
  const allProducts = useSelector(selectAllProducts);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(prevState => !prevState);
  };

  useEffect(() => {
    let filtered = [...allProducts];

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.includes(product.brand)
      );
    }

    if (selectedCountries.length > 0) {
      filtered = filtered.filter(product =>
        selectedCountries.includes(product.country)
      );
    }

    if (minPrice !== 0 || maxPrice !== 1000) {
      filtered = filtered.filter(
        product => product.price >= minPrice && product.price <= maxPrice
      );
    }

    setFilteredProducts(filtered);
  }, [allProducts, selectedBrands, selectedCountries, minPrice, maxPrice]);

  const applyBrandFilter = selectedBrands => {
    setSelectedBrands(selectedBrands);
  };

  const applyCountryFilter = selectedCountries => {
    setSelectedCountries(selectedCountries);
  };

  const applyPriceFilter = (minPrice, maxPrice) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  };

  const resetFilters = useCallback(() => {
    setSelectedBrands([]);
    setSelectedCountries([]);
    setMinPrice(0);
    setMaxPrice(1000);
  }, []);

  return (
    <CatalogPageWrapper>
      <FilterModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        filterProps={{
          allProducts,
          applyBrandFilter,
          applyCountryFilter,
          applyPriceFilter,
          resetFilters,
        }}
      />
      <FilterWrapper>
        <Filter
          products={allProducts}
          applyBrandFilter={applyBrandFilter}
          applyCountryFilter={applyCountryFilter}
          applyPriceFilter={applyPriceFilter}
          resetFilters={resetFilters}
        />
      </FilterWrapper>
      <ProductListWrapper>
        <FilterBtnTitleMobileContainer>
          <ProductListTitle>Каталог товарів</ProductListTitle>
          <FilterButton onClick={toggleModal} />
        </FilterBtnTitleMobileContainer>
        {filteredProducts.length === 0 ? (
          <div>
            <NoProductsMessage>
              Немає товарів, що відповідають вибраним критеріям
            </NoProductsMessage>
            <ResetButton onClick={resetFilters}>Скинути фільтри</ResetButton>
          </div>
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </ProductListWrapper>
      {error && <h2>Упс, щось пішло не так</h2>}
      {loading && !error && <Loader />}
    </CatalogPageWrapper>
  );
};

export default CatalogPage;
