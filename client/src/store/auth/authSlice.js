import { createSlice, isAnyOf, combineReducers } from '@reduxjs/toolkit';

import * as TNK from 'store/auth/authThunks';

import { userInitialState } from './initialState';

const thunkArr = [
  TNK.registerThunk,
  TNK.loginThunk,
  TNK.logoutThunk,
  TNK.verifyEmailThunk,
  TNK.forgotPassThunk,
  TNK.resetPassThunk,
  TNK.updateUserThunk,
  TNK.deleteUserThunk,
  TNK.refreshUserThunk,
];
const fn = type => thunkArr.map(el => el[type]);

const handleLoginSucsess = (_, action) => action.payload.result.user;

const handleLogoutSucsess = () => userInitialState;

const handleAuthSucsess = (state, action) => {
  const { accessToken, refreshToken } = action.payload.result.user;
  return { ...state, accessToken, refreshToken };
};

// fulfilled slice
const authUserSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    authenticate: handleAuthSucsess,
  },
  extraReducers: builder => {
    builder
      // auth
      .addCase(TNK.registerThunk.fulfilled, handleLoginSucsess)
      .addCase(TNK.loginThunk.fulfilled, handleLoginSucsess)
      .addCase(TNK.logoutThunk.fulfilled, handleLogoutSucsess)
      // auth from localStorage
      .addCase(TNK.refreshUserThunk.fulfilled, handleLoginSucsess)
      // verify email
      .addCase(TNK.verifyEmailThunk.fulfilled, handleLoginSucsess)
      // reset password
      .addCase(TNK.forgotPassThunk.fulfilled, handleLogoutSucsess)
      .addCase(TNK.resetPassThunk.fulfilled, handleLogoutSucsess)
      // update profile
      .addCase(TNK.updateUserThunk.fulfilled, handleLoginSucsess)
      .addCase(TNK.deleteUserThunk.fulfilled, handleLogoutSucsess);
  },
});

// loading slice
const authIsLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => true)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
      .addMatcher(isAnyOf(...fn('rejected')), () => false);
  },
});

// refreshing slice
const authIsRefreshingSlice = createSlice({
  name: 'isRefreshing',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => true)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
      .addMatcher(isAnyOf(...fn('rejected')), () => false);
  },
});

// error slice
const authErrorSlice = createSlice({
  name: 'error',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => false)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
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
