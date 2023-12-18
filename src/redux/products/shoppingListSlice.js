import { createSlice } from '@reduxjs/toolkit';
import { addFavorite, deleteFavorite } from './favoriteSlice';

const initialState = {
  shoppingList: [],
  totalPrice: 0,
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addToList(state, { payload }) {
      state.shoppingList.push(payload);
state.favorites = state.favorites.filter((product) => product !== payload);
    },
    deleteFromList(state, { payload }) {
      state.shoppingList = state.shoppingList.filter(
        product => product !== payload
      );
    },
    setTotalPrice(state, { payload }) {
      state.totalPrice += payload;
    },
    resetTotalPrice(state) {
      state.totalPrice = 0;
    },
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
export const { addToList, deleteFromList, setTotalPrice, resetTotalPrice } =
  shoppingListSlice.actions;
