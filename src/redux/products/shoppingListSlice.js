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
      // console.log('Product to be added:', payload);
      return {
        ...state,
        shoppingList: [...state.shoppingList, payload],
      };
    },
    updateQuantityInList(state, action) {
      const { id, changeQuantity } = action.payload;
      const itemToUpdate = state.shoppingList.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity += changeQuantity;
        state.totalPrice += itemToUpdate.price * changeQuantity;
      }
    },
    deleteFromList(state, { payload }) {
      const deletedProductId = payload.id;
      const deletedProduct = state.shoppingList.find(
        product => product.id === deletedProductId
      );
      if (deletedProduct) {
        state.totalPrice -= deletedProduct.price * deletedProduct.quantity;
      }
      state.shoppingList = state.shoppingList.filter(
        product => product.id !== deletedProductId
      );
    },
    setTotalPrice(state, { payload }) {
      state.totalPrice += payload;
    },
    resetTotalPrice(state) {
      state.totalPrice = 0;
    },
    resetShoppingList(state) {
      state.shoppingList = [];
    },
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
export const {
  addToList,
  deleteFromList,
  setTotalPrice,
  resetTotalPrice,
  updateQuantityInList,
  resetShoppingList,
} = shoppingListSlice.actions;
