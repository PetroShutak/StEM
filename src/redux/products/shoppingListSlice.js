import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shoppingList: [],
  totalPrice: 0,
};

const roundToTwoDecimalPlaces = value => {
  return Number(value.toFixed(2));
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
        const updatedQuantity = itemToUpdate.quantity + changeQuantity;
        const updatedTotalPrice = roundToTwoDecimalPlaces(
          state.totalPrice + itemToUpdate.price * changeQuantity
        );

        state.shoppingList.forEach(item => {
          if (item.id === id) {
            item.quantity = updatedQuantity;
          }
        });

        state.totalPrice = updatedTotalPrice;
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
      state.totalPrice += roundToTwoDecimalPlaces(payload);
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
