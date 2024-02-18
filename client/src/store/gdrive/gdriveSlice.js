import { createSlice, isAnyOf, combineReducers } from '@reduxjs/toolkit';

import * as TNK from './gdriveThunks';

const thunkArr = [TNK.listFilesThunk];

const fn = type => thunkArr.map(el => el[type]);

// files

const handleListFiles = (_, action) => {
  const files = action.payload.files;
  return files.filter(el => el.shared === true);
};

// fulfilled files slice
const gdriveListFilesSlice = createSlice({
  name: 'files',
  initialState: [],
  reducers: {
    emptyFiles: () => [],
  },
  extraReducers: builder => {
    builder.addCase(TNK.listFilesThunk.fulfilled, handleListFiles);
  },
});

// fulfilled active file slice
const fileActiveSlice = createSlice({
  name: 'active',
  initialState: null,
  reducers: {
    setActiveFile: (_, action) => action.payload,
  },
});

// loading slice
const gdriveIsLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => true)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
      .addMatcher(isAnyOf(...fn('rejected')), () => false);
  },
});

// error slice
const gdriveErrorSlice = createSlice({
  name: 'error',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => false)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
      .addMatcher(isAnyOf(...fn('rejected')), (_, action) => action.payload);
  },
});

export const gdriveReducer = combineReducers({
  files: gdriveListFilesSlice.reducer,
  active: fileActiveSlice.reducer,

  isLoading: gdriveIsLoadingSlice.reducer,
  error: gdriveErrorSlice.reducer,
});

export const { emptyFiles } = gdriveListFilesSlice.actions;
export const { setActiveFile } = fileActiveSlice.actions;
