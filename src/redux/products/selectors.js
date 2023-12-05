import { createSelector } from '@reduxjs/toolkit';

export const selectAllProducts = state => state.products.products;
export const selectShoppingList = state => state.shoppingList.shoppingList;
export const selectFavorites = state => state.favorites.favorites;
export const selectIsFiltred = state => state.filter.isFiltred;
export const selectSearchResults = state => state.searchResult.searchResults;
export const selectLoading = state => state.products.isLoading;

export const selectError = state => state.products.error;

export const selectShoppingListProducts = createSelector(
  [selectAllProducts, selectShoppingList],
  (allProducts, shoppingList) => {
    return allProducts.filter(product => shoppingList.includes(product._id));
  }
);

export const selectFiltredShoppingListProducts = createSelector(
  [selectShoppingListProducts, selectIsFiltred],
  (shoppingListProducts, isFiltred) => {
    return shoppingListProducts.filter(
      product => product.isFiltred === isFiltred
    );
  }
);

export const selectFavoriteProducts = createSelector(
  [selectAllProducts, selectFavorites],
  (allProducts, favorites) => {
    return allProducts.filter(product => favorites.includes(product._id));
  }
);

export const selectFiltredProducts = createSelector(
  [selectAllProducts, selectIsFiltred],
  (allProducts, isFiltred) => {
    return allProducts.filter(product => product.isFiltred === isFiltred);
  }
);

export const selectFiltredFavoriteProducts = createSelector(
  [selectFiltredProducts, selectFavorites],
  (filtredProducts, favorites) => {
    return filtredProducts.filter(product => favorites.includes(product._id));
  }
);
