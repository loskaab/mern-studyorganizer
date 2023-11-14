import { createSlice, isAnyOf, combineReducers } from '@reduxjs/toolkit';

import * as OPS from 'store/auth/authOperations';

import { initialState } from './initialState';

const thunkArr = [
  OPS.registerThunk,
  OPS.loginThunk,
  OPS.logoutThunk,
  OPS.verifyEmailThunk,
  OPS.forgotPassThunk,
  OPS.resetPassThunk,
  OPS.updateUserThunk,
  OPS.deleteUserThunk,
  OPS.refreshUserThunk,
];
const fn = type => thunkArr.map(el => el[type]);

const handleLoginSucsess = (_, action) => action.payload.result.user;

const handleLogoutSucsess = () => initialState;

const handleAuthSucsess = (state, action) => {
  const { accessToken, refreshToken } = action.payload.result.user;
  return { ...state, accessToken, refreshToken };
};

// fulfilled slice
const authUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate: handleAuthSucsess,
  },
  extraReducers: builder => {
    builder
      // auth
      .addCase(OPS.registerThunk.fulfilled, handleLoginSucsess)
      .addCase(OPS.loginThunk.fulfilled, handleLoginSucsess)
      .addCase(OPS.logoutThunk.fulfilled, handleLogoutSucsess)
      // auth from localStorage
      .addCase(OPS.refreshUserThunk.fulfilled, handleLoginSucsess)
      // verify email
      .addCase(OPS.verifyEmailThunk.fulfilled, handleLoginSucsess)
      // reset password
      .addCase(OPS.forgotPassThunk.fulfilled, handleLogoutSucsess)
      .addCase(OPS.resetPassThunk.fulfilled, handleLogoutSucsess)
      // update profile
      .addCase(OPS.updateUserThunk.fulfilled, handleLoginSucsess)
      .addCase(OPS.deleteUserThunk.fulfilled, handleLogoutSucsess);
  },
});

// loading slice
const authIsLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), state => true)
      .addMatcher(isAnyOf(...fn('fulfilled')), state => false)
      .addMatcher(isAnyOf(...fn('rejected')), state => false);
  },
});

// refreshing slice
const authIsRefreshingSlice = createSlice({
  name: 'isRefreshing',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), state => true)
      .addMatcher(isAnyOf(...fn('fulfilled')), state => false)
      .addMatcher(isAnyOf(...fn('rejected')), state => false);
  },
});

// error slice
const authErrorSlice = createSlice({
  name: 'error',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), state => false)
      .addMatcher(isAnyOf(...fn('fulfilled')), state => false)
      .addMatcher(isAnyOf(...fn('rejected')), (_, action) => action.payload);
  },
});

export const authReducer = combineReducers({
  user: authUserSlice.reducer,
  isLoading: authIsRefreshingSlice.reducer,
  isRefreshing: authIsLoadingSlice.reducer,
  error: authErrorSlice.reducer,
});

export const { authenticate } = authUserSlice.actions;
