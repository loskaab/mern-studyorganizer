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
  const { id } = action.payload.result;
  return state.filter(el => !id.includes(el._id));
};

// fulfilled items slice
const elementItemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    cleanElement: () => [],
  },
  extraReducers: builder => {
    builder
      .addCase(TNK.fetchElementsThunk.fulfilled, handleFetchElements)
      .addCase(TNK.addElementThunk.fulfilled, handleAddElement)
      .addCase(TNK.updateElementThunk.fulfilled, handleUpdateElement)
      .addCase(TNK.deleteElementThunk.fulfilled, handleDeleteElement);
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

// fulfilled select slice
const elementSelectSlice = createSlice({
  name: 'select',
  initialState: '',
  reducers: {
    setElementSelect: (_, action) => action.payload,
  },
});

// fulfilled trash slice
const elementTrashSlice = createSlice({
  name: 'trash',
  initialState: [],
  reducers: {
    setElementTrash: (state, { payload }) => {
      const isInTrash = state.find(el => el._id === payload._id);
      if (isInTrash) {
        return state.filter(el => el._id !== payload._id);
      } else {
        state.push(payload);
      }
    },
  },
});

// fulfilled filter slice
const elementFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setElementFilter: (_, action) => action.payload,
  },
});

// loading slice
const elementIsLoadingSlice = createSlice({
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
const elementErrorSlice = createSlice({
  name: 'error',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => false)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
      .addMatcher(isAnyOf(...fn('rejected')), (_, action) => action.payload);
  },
});

export const elementsReducer = combineReducers({
  items: elementItemsSlice.reducer,
  active: elementActiveSlice.reducer,
  filter: elementFilterSlice.reducer,
  select: elementSelectSlice.reducer,
  trash: elementTrashSlice.reducer,

  isLoading: elementIsLoadingSlice.reducer,
  error: elementErrorSlice.reducer,
});

export const { cleanElement } = elementItemsSlice.actions;
export const { setActiveElement } = elementActiveSlice.actions;
export const { setElementFilter } = elementFilterSlice.actions;
export const { setElementSelect } = elementSelectSlice.actions;
export const { setElementTrash } = elementTrashSlice.actions;
