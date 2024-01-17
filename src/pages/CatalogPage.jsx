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
  ResultTitleWRP,
} from 'components/PageStyled/CatalogPage.styled';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ProductList from 'components/ProductList/ProductList';
import FilterModal from 'components/Filter/FilterModal/FilterModal';
import ReactPaginate from 'react-paginate';
import SortSelect from 'components/SortSelect/SortSelect';
import WelcomeComponent from 'components/Filter/WelcomeComponent/WelcomeComponent';

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
  const [isFilterReset, setIsFilterReset] = useState(true);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // pagination

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
    setCurrentPage(1);
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

  let title = <ProductListTitle>Каталог товарів</ProductListTitle>;
  if (!isFilterReset && filteredProducts.length > 0) {
    title = (
      <ResultTitleWRP>
        <h2>Результати:</h2>
        <p>Знайдено: {filteredProducts.length}</p>
      </ResultTitleWRP>
    );
  }

  const resetFilters = useCallback(() => {
    setSelectedBrands([]);
    setSelectedCountries([]);
    setMinPrice(0);
    setMaxPrice(1000);
    setIsFilterReset(true);
  }, []);

  useEffect(() => {
    if (
      selectedBrands.length === 0 &&
      selectedCountries.length === 0 &&
      minPrice === 0 &&
      maxPrice === 1000
    ) {
      setIsFilterReset(true);
    } else {
      setIsFilterReset(false);
    }
  }, [selectedBrands, selectedCountries, minPrice, maxPrice]);

  // pagination
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  // pagination

  const sortProductByPrice = sortType => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortType === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  const sortProductByRaiting = sortType => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortType === 'desc') {
        return a.raiting - b.raiting;
      } else {
        return b.raiting - a.raiting;
      }
    });
    setFilteredProducts(sortedProducts);
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
          resetFilters,
        }}
      />
      <FilterWrapper>
        <WelcomeComponent />
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
          {title}
          <FilterButton onClick={toggleModal} />
        </FilterBtnTitleMobileContainer>
        {filteredProducts.length > 0 && (
          <SortSelect
            sortProductByPrice={sortProductByPrice}
            sortProductByRaiting={sortProductByRaiting}
          />
        )}
        {filteredProducts.length === 0 ? (
          <div>
            <NoProductsMessage>
              Немає товарів, що відповідають вибраним критеріям
            </NoProductsMessage>
            <ResetButton onClick={resetFilters}>Скинути фільтри</ResetButton>
          </div>
        ) : (
          <ProductList products={currentProducts} />
        )}
        {filteredProducts.length > 0 && (
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={Math.ceil(filteredProducts.length / productsPerPage)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            containerClassName={'pagination'}
            activeClassName={'active'}
            onPageChange={paginate}
            disableInitialCallback={true}
            previousClassName={currentPage === 1 ? 'disabled' : ''}
            nextClassName={
              currentPage ===
              Math.ceil(filteredProducts.length / productsPerPage)
                ? 'disabled'
                : ''
            }
          />
        )}
      </ProductListWrapper>
      {error && <h2>Упс, щось пішло не так</h2>}
      {loading && !error && <Loader />}
    </CatalogPageWrapper>
  );
};

export default CatalogPage;
