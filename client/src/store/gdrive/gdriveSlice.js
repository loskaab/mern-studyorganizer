import { createSlice, isAnyOf, combineReducers } from '@reduxjs/toolkit';

import * as TNK from './gdriveThunks';

const thunkArr = [TNK.listFilesThunk, TNK.getFileThunk, TNK.deleteFileThunk];

const fn = type => thunkArr.map(el => el[type]);

// list files
const handleListFiles = (_, action) => {
  let files = action.payload.files;
  files = files.filter(el => el.shared && !el.trashed);
  return files;
};

// get file
// const handleGetFile = (_, action) => {
//   const data = action.payload;
// };

// fulfilled files slice
const gdriveFilesSlice = createSlice({
  name: 'files',
  initialState: [],
  reducers: {
    emptyFiles: () => [],
  },
  extraReducers: builder => {
    builder.addCase(TNK.listFilesThunk.fulfilled, handleListFiles);
    builder.addCase(TNK.getFileThunk.fulfilled);
    builder.addCase(TNK.deleteFileThunk.fulfilled);
  },
});

// fulfilled active slice
const fileActiveSlice = createSlice({
  name: 'active',
  initialState: null,
  reducers: {
    setActiveFile: (_, action) => action.payload,
  },
});

// fulfilled filter slice
const gdriveFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setGdriveFilter: (_, action) => action.payload,
  },
});

// fulfilled select slice
const gdriveSelectSlice = createSlice({
  name: 'select',
  initialState: '',
  reducers: {
    setGdriveSelect: (_, action) => action.payload,
  },
});


// fulfilled trash slice
const gdriveTrashSlice = createSlice({
  name: 'trash',
  initialState: [],
  reducers: {
    setGdriveTrash: (state, { payload }) => {
      const isInTrash = state.find(el => el.id === payload.id);
      if (isInTrash) {
        return state.filter(el => el.id !== payload.id);
      } else {
        state.push(payload);
      }
    },
    emptyGdriveTrash: () => [],
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
  files: gdriveFilesSlice.reducer,
  active: fileActiveSlice.reducer,
  filter: gdriveFilterSlice.reducer,
  select: gdriveSelectSlice.reducer,
  trash: gdriveTrashSlice.reducer,

  isLoading: gdriveIsLoadingSlice.reducer,
  error: gdriveErrorSlice.reducer,
});

export const { emptyFiles } = gdriveFilesSlice.actions;
export const { setActiveFile } = fileActiveSlice.actions;
export const { setGdriveFilter } = gdriveFilterSlice.actions;
export const { setGdriveSelect } = gdriveSelectSlice.actions;
export const { setGdriveTrash, emptyGdriveTrash } = gdriveTrashSlice.actions;
