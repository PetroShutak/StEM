import React from 'react';
import ProductsItem from '../ProductList/ProductItem/ProductItem';
import { ProductListStyled, List } from './ProductList.styled';

const ProductList = ({ products }) => {
  return (
    <ProductListStyled>
      <List>
        {products.map(
          ({ _id, name, description, price, image, category, subcategory }) => (
            <ProductsItem
              key={_id}
              id={_id}
              name={name}
              image={image}
              description={description}
              price={price}
              category={category}
              subcategory={subcategory}
            />
          )
        )}
      </List>
    </ProductListStyled>
  );
};

export default ProductList;
