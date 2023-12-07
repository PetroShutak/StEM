import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productsReducer } from './products/productSlice';
import { filterReducer } from './products/filterSlice';
import { favoriteReducer } from './products/favoriteSlice';
import { shoppingListReducer } from './products/shoppingListSlice';
import { searchReducer } from './products/searchSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites', 'shoppingList', 'totalPrice'],
};

const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer);
const persistedShoppingListReducer = persistReducer(
  persistConfig,
  shoppingListReducer
);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
    favorites: persistedFavoriteReducer,
    shoppingList: persistedShoppingListReducer,
    searchResult: searchReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
