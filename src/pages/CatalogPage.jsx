import Loader from 'components/Loader/Loader';
import ProductList from 'components/ProductList/ProductList';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllProducts,
  selectError,
  selectLoading,
} from 'redux/products/selectors';
import {
  CatalogPageWrapper,
  FilterWrapper,
  NoProductsMessage,
  ProductListTitle,
  ProductListWrapper,
} from 'components/PageStyled/CatalogPage.styled';
import Filter from 'components/Filter/Filter';

const CatalogPage = () => {
  const allProducts = useSelector(selectAllProducts);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

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

    setFilteredProducts(filtered);
  }, [allProducts, selectedBrands, selectedCountries]);

  const applyBrandFilter = selectedBrands => {
    setSelectedBrands(selectedBrands);
  };

  const applyCountryFilter = selectedCountries => {
    setSelectedCountries(selectedCountries);
  };

  return (
    <CatalogPageWrapper>
      <FilterWrapper>
        <Filter
          products={allProducts}
          applyBrandFilter={applyBrandFilter}
          applyCountryFilter={applyCountryFilter}
        />
      </FilterWrapper>
      <ProductListWrapper>
        <ProductListTitle>Каталог товарів</ProductListTitle>
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
