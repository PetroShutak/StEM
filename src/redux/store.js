import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import { productsReducer } from "./products/productSlice";
// import { filterReducer } from "./filtersSlice";
import { favoriteReducer } from "./products/favoriteSlice";

const persistConfig = {
  	key: "favorites",
  	storage,
  	whitelist: ["favorites"],
};

const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
	reducer: {
		products: productsReducer,
		// filter: filterReducer,
		favorites: persistedFavoriteReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

export const persistor = persistStore(store);