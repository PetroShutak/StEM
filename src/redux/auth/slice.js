import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  logIn,
  logOut,
  refreshUser,
  getProfile,
  forgotPassword,
  updateAvatar,
} from './operations';

const initialState = {
  user: { name: null, email: null, password: null, avatarURL: null },
  token: null,
  verificationToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.verificationToken = action.payload.verificationToken;
        // state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(logIn.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(logOut.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
        };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getProfile.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(forgotPassword.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.isRefreshing = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(updateAvatar.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
        state.isRefreshing = false;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      });
  },
});

export default authSlice.reducer;
export const { clearError } = authSlice.actions;
