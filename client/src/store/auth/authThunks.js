import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'servises/userApi';

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    return await API.register(credentials);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    return await API.login(credentials);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    return await API.logout();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const verifyEmailThunk = createAsyncThunk('auth/verify', async (credentials, thunkAPI) => {
  try {
    return await API.verifyEmail(credentials);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const forgotPassThunk = createAsyncThunk('auth/forgot', async (credentials, thunkAPI) => {
  try {
    return await API.forgotPass(credentials);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const resetPassThunk = createAsyncThunk('auth/reset', async (credentials, thunkAPI) => {
  try {
    return await API.resetPass(credentials);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUserThunk = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const persistedToken = thunkAPI.getState().auth.user.accessToken;
  try {
    return await API.refreshUser(persistedToken);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUserThunk = createAsyncThunk('users/update', async (credentials, thunkAPI) => {
  try {
    return await API.updateUser(credentials);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteUserThunk = createAsyncThunk('users/delete', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.accessToken;
  try {
    return await API.deleteUser(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
