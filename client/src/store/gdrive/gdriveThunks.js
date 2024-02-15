import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'servises/google/gdriveApi';

// files
export const listFilesThunk = createAsyncThunk(
  'files/gapiLoad',
  async (_, thunkAPI) => {
    try {
      return await API.listFiles();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
