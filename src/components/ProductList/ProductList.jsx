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
// import {
//   // useState,
//   useEffect,
// } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   FavoriteButton,
//   FavoriteButtonActive,
//   ProductDescription,
//   ProductImage,
//   ProductItem,
//   ProductListStyled,
//   ProductName,
//   ProductPrice,
// } from './ProductList.styled';
// import { getAllProducts } from '../../redux/products/operations';
// import {
//   selectAllProducts,
//   selectError,
//   selectFavorites,
//   selectLoading,
// } from '../../redux/products/selectors';
// import Loader from 'components/Loader/Loader';
// import {
//   addFavorite,
//   deleteFavorite,
// } from '../../redux/products/favoriteSlice';
// import { updateFilter } from 'redux/products/filterSlice';

// const ProductList = () => {
//   const products = useSelector(selectAllProducts);
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, [dispatch]);

//   const favorites = useSelector(selectFavorites);

//   const handleAddFavorites = favId => {
//     dispatch(addFavorite(favId));
//     dispatch(updateFilter());
//   };

//   const handleRemoveFavorites = favId => {
//     dispatch(deleteFavorite(favId));
//   };

//   const toggleFavorite = favId => {
//     if (favorites.includes(favId)) {
//       handleRemoveFavorites(favId);
//     } else {
//       handleAddFavorites(favId);
//     }
//   };

//   return (
//     <ProductListStyled>
//       {loading && !error && <Loader />}

//       {products.map(product => (
//         <ProductItem key={product._id}>
//           <ProductImage src={product.image} alt={product.name} />
//           <ProductName>{product.name}</ProductName>
//           <ProductDescription>{product.description}</ProductDescription>
//           <ProductPrice>{product.price} ₴</ProductPrice>
//           {favorites.includes(product._id) ? (
//             <FavoriteButtonActive onClick={() => toggleFavorite(product._id)} />
//           ) : (
//             <FavoriteButton onClick={() => toggleFavorite(product._id)} />
//           )}
//         </ProductItem>
//       ))}
//     </ProductListStyled>
//   );
// };

// export default ProductList;
