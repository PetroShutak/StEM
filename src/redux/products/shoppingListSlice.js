import { createSlice } from '@reduxjs/toolkit';

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
