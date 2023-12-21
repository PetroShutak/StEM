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
    // deleteFromList(state, { payload }) {
    //   state.shoppingList = state.shoppingList.filter(
    //     product => product !== payload
    //   );
    // },

    // deleteFromList(state, { payload }) {
    //   const deletedProductId = payload.id;
    //   console.log('Deleted Product ID:', deletedProductId);
    //   const deletedProduct = state.shoppingList.find(
    //     product => product._id === deletedProductId
    //   );

    //   if (deletedProduct) {
    //     state.totalPrice -= deletedProduct.price * deletedProduct.quantity;
    //         console.log('Price:', deletedProduct.price);
    //     console.log('Quantity:', deletedProduct.quantity);
    //     state.shoppingList = state.shoppingList.filter(
    //       product => product._id !== deletedProductId
    //     );
    //     console.log('Price after:', state.totalPrice);
    //   }
    // },

   deleteFromList(state, { payload }) {
  const deletedProductId = payload.id;
  console.log('Deleted Product ID:', deletedProductId);

  const deletedProductIndex = state.shoppingList.findIndex(
    product => product.id === deletedProductId
  );
  console.log('Deleted Product Index:', deletedProductIndex);

  console.log('Shopping List before deletion:', state.shoppingList);

  if (deletedProductIndex !== -1) {
    const deletedProduct = state.shoppingList[deletedProductIndex];
    state.totalPrice -= deletedProduct.price * deletedProduct.quantity;
    console.log('Price:', deletedProduct.price);
    console.log('Quantity:', deletedProduct.quantity);

    state.shoppingList.splice(deletedProductIndex, 1);

    console.log('Shopping List after deletion:', state.shoppingList);
    console.log('Price after:', state.totalPrice);
  } else {
    console.log('Product not found in the shopping list.');
  }
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
