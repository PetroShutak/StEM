import React,{useEffect} from 'react';
import {
  useSelector,
   useDispatch
} from 'react-redux';
import {
  selectFavoriteProducts,
  selectFiltredFavoriteProducts,
  selectIsFiltred,
} from '../redux/products/selectors';
import ProductList from 'components/ProductList/ProductList';
import NoFavorites from '../components/NoFavorites/NoFavorites';
import { getAllProducts } from 'redux/products/operations';
import { resetFilter } from 'redux/products/filterSlice';

const FavoritePage = () => {
  const isFiltred = useSelector(selectIsFiltred);
  const favorites = useSelector(selectFavoriteProducts);
  const filtredFavorites = useSelector(selectFiltredFavoriteProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(resetFilter())
  }, [dispatch]);



  console.log('isFiltred', isFiltred);
  console.log('favorites', favorites);
  console.log('filtredFavorites', filtredFavorites);
  return (
    <div>
      <h1>FavoritePage</h1>
    
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <ProductList products={isFiltred ? filtredFavorites : favorites} />
      )}
    </div>
  );
};

export default FavoritePage;
