import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'servises/google/gdriveApi';

export const listFilesThunk = createAsyncThunk(
  'files/listFiles',
  async (_, thunkAPI) => {
    try {
      return await API.listFiles();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
