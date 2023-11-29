import { createSelector } from '@reduxjs/toolkit';

export const selectAllProducts = state => state.products.products;

export const selectFavorites = state => state.favorites.favorites;

export const selectLoading = state => state.products.isLoading;

export const selectError = state => state.products.error;

// export const selectFavoriteProducts = createSelector(
//   [selectAllProducts, selectFavorites],
//   (allProducts, favorites) => {
//     return allProducts.filter(product => favorites.includes(product.id));
//   }
// );


export const selectFavoriteProducts = createSelector([selectAllProducts, selectFavorites],
    (allProducts, favorites) => {
        return allProducts.filter(product => favorites.includes(product.id))
    }
);