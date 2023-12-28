import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllProducts,
  selectError,
  selectLoading,
} from 'redux/products/selectors';
import {
  CatalogPageWrapper,
  FilterButton,
  FilterWrapper,
  NoProductsMessage,
  ProductListTitle,
  ProductListWrapper,
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
        }}
      />
      <FilterWrapper>
        <Filter
          products={allProducts}
          applyBrandFilter={applyBrandFilter}
          applyCountryFilter={applyCountryFilter}
          applyPriceFilter={applyPriceFilter}
        />
      </FilterWrapper>
      <ProductListWrapper>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <FilterButton onClick={toggleModal} />
          <ProductListTitle>Каталог товарів</ProductListTitle>
        </div>
        {filteredProducts.length === 0 ? (
          <NoProductsMessage>
            Немає товарів, що відповідають вибраним критеріям
          </NoProductsMessage>
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
