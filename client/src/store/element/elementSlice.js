import { createSlice, isAnyOf, combineReducers } from '@reduxjs/toolkit';

import * as TNK from './elementThunks';

const thunkArr = [
  TNK.fetchElementsThunk,
  TNK.addElementThunk,
  TNK.updateElementThunk,
  TNK.deleteElementThunk,
];
const fn = type => thunkArr.map(el => el[type]);

const handleFetchElements = (_, action) => {
  return action.payload.result.elements;
};

const handleAddElement = (state, action) => {
  state.unshift(action.payload.result.element);
};

const handleUpdateElement = (state, action) => {
  const { element } = action.payload.result;
  const index = state.findIndex(el => el._id === element._id);
  state.splice(index, 1, element);
};

const handleDeleteElement = (state, action) => {
  const { element } = action.payload.result;
  return state.filter(el => el._id !== element._id);
};

// fulfilled items slice
const elementItemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    cleanElement: state => [],
  },
  extraReducers: builder => {
    builder
      .addCase(TNK.fetchElementsThunk.fulfilled, handleFetchElements)
      .addCase(TNK.addElementThunk.fulfilled, handleAddElement)
      .addCase(TNK.updateElementThunk.fulfilled, handleUpdateElement)
      .addCase(TNK.deleteElementThunk.fulfilled, handleDeleteElement);
  },
});

// fulfilled filter slice
const elementFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setelementFilter: (_, action) => action.payload,
  },
});

// fulfilled active element slice
const elementActiveSlice = createSlice({
  name: 'active',
  initialState: null,
  reducers: {
    setActiveElement: (_, action) => action.payload,
  },
});

// loading slice
const elementIsLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), state => true)
      .addMatcher(isAnyOf(...fn('fulfilled')), state => false)
      .addMatcher(isAnyOf(...fn('rejected')), state => false);
  },
});

// error slice
const elementErrorSlice = createSlice({
  name: 'error',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), state => false)
      .addMatcher(isAnyOf(...fn('fulfilled')), state => false)
      .addMatcher(isAnyOf(...fn('rejected')), (_, action) => action.payload);
  },
});

export const elementsReducer = combineReducers({
  items: elementItemsSlice.reducer,
  active: elementActiveSlice.reducer,
  filter: elementFilterSlice.reducer,
  isLoading: elementIsLoadingSlice.reducer,
  error: elementErrorSlice.reducer,
});

export const { cleanElement } = elementItemsSlice.actions;
export const { setActiveElement } = elementActiveSlice.actions;
export const { setelementFilter } = elementFilterSlice.actions;
