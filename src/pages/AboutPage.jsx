import Pagination from 'components/Pagination/Pagination';
import ProductList from 'components/ProductList/ProductList';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from 'redux/products/selectors';

// треба протестити пагінацію, я зроблю це тут, але потім видалю

const AboutPage = () => {
  const products = useSelector(selectAllProducts);
  console.log(products);

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ProductList products={currentProducts} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
      {}
      {/* <div>
      <p style={{ color: 'var(--text-color-primary-black)' }}>Про нас</p>
    </div> */}
    </>
  );
};

export default AboutPage;
