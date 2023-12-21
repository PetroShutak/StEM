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
      console.log('Product to be added:', payload);
      // state.shoppingList.push(payload);
      return {
        ...state,
        shoppingList: [...state.shoppingList, payload],
      };
    },

    deleteFromList(state, { payload }) {
      const deletedProductId = payload.id;
      const updatedShoppingList = state.shoppingList.filter(
        product => product.id !== deletedProductId
      );
      const deletedProduct = state.shoppingList.find(
        product => product.id === deletedProductId
      );

      if (deletedProduct) {
        state.totalPrice -= deletedProduct.price * deletedProduct.quantity;
      }
      state.shoppingList = updatedShoppingList;
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
