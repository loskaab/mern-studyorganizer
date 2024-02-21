import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'servises/google/gdriveApi';

// files
export const listFilesThunk = createAsyncThunk(
  'files/list',
  async (_, thunkAPI) => {
    try {
      return await API.listFiles();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteFileThunk = createAsyncThunk(
  'files/delete',
  async (fileId, thunkAPI) => {
    try {
      return await API.deleteFile(fileId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
