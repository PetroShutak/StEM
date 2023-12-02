import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shoppingList: []
};      

    const shoppingListSlice = createSlice({
    name: "shoppingList",
    initialState,
    reducers: {
        addToList(state, { payload }) {
            state.shoppingList.push(payload);
        },
        deleteFromList(state, { payload }) {
            state.shoppingList = state.shoppingList.filter((product) => product !== payload);
        },
    },
});


export const shoppingListReducer = shoppingListSlice.reducer;
export const { addToList, deleteFromList } = shoppingListSlice.actions;
