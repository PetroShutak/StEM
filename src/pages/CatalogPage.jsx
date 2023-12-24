import Loader from 'components/Loader/Loader';
import ProductList from 'components/ProductList/ProductList';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllProducts,
  selectError,
  selectLoading,
} from 'redux/products/selectors';
import {
  CatalogPageWrapper,
  FilterWrapper,
  ProductListTitle,
  ProductListWrapper,
} from 'components/PageStyled/CatalogPage.styled';
import Filter from 'components/Filter/Filter';

const CatalogPage = () => {
  const allProducts = useSelector(selectAllProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts]);

  const applyFilter = selectedBrands => {
    const filtered = allProducts.filter(product =>
      selectedBrands.includes(product.brand)
    );
    setFilteredProducts(filtered);
    if (selectedBrands.length === 0) {
      setFilteredProducts(allProducts);
    }
  };

  return (
    <CatalogPageWrapper>
      <FilterWrapper>
        <Filter products={allProducts} applyFilter={applyFilter} />
      </FilterWrapper>
      <ProductListWrapper>
        <ProductListTitle>Каталог товарів</ProductListTitle>
        <ProductList products={filteredProducts} />
      </ProductListWrapper>
      {error && <h2>Упс, щось пішло не так</h2>}
      {loading && !error && <Loader />}
    </CatalogPageWrapper>
  );
};

export default CatalogPage;
