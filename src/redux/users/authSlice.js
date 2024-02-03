// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
  // Додайте інші потрібні поля стану
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = Boolean(action.payload);
    },
    // Додайте інші редуктори для роботи з автентифікацією
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
