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

// fulfilled check slice
const gdriveCheckSlice = createSlice({
  name: 'check',
  initialState: [],
  reducers: {
    setGdriveCheck: (state, { payload }) => {
      const isInCheck = state.find(el => el.id === payload.id);
      if (isInCheck) {
        return state.filter(el => el.id !== payload.id);
      } else {
        state.push(payload);
      }
    },
    emptyGdriveCheck: () => [],
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
  files: gdriveListFilesSlice.reducer,
  active: fileActiveSlice.reducer,
  filter: gdriveFilterSlice.reducer,
  select: gdriveSelectSlice.reducer,
  check: gdriveCheckSlice.reducer,
  trash: gdriveTrashSlice.reducer,

  isLoading: gdriveIsLoadingSlice.reducer,
  error: gdriveErrorSlice.reducer,
});

export const { emptyFiles } = gdriveListFilesSlice.actions;
export const { setActiveFile } = fileActiveSlice.actions;
export const { setGdriveFilter } = gdriveFilterSlice.actions;
export const { setGdriveSelect } = gdriveSelectSlice.actions;
export const { setGdriveCheck, emptyGdriveCheck } = gdriveCheckSlice.actions;
export const { setGdriveTrash, emptyGdriveTrash } = gdriveTrashSlice.actions;
