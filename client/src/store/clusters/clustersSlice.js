import { createSlice, isAnyOf, combineReducers } from '@reduxjs/toolkit';

import * as TNK from './clustersThunks';

const thunkArr = [
  TNK.fetchClustersThunk,
  TNK.addClusterThunk,
  TNK.updateClusterThunk,
  TNK.deleteClusterThunk,
];
const fn = type => thunkArr.map(el => el[type]);

const handleFetchClusters = (_, action) => {
  return action.payload.result.clusters;
};

const handleAddCluster = (state, action) => {
  state.unshift(action.payload.result.cluster);
};

const handleUpdateCluster = (state, action) => {
  const { cluster } = action.payload.result;
  const index = state.findIndex(el => el._id === cluster._id);
  state.splice(index, 1, cluster);
};

const handleUpdateClusterFavorite = (state, action) => {
  const { cluster } = action.payload.result;
  const index = state.findIndex(el => el._id === cluster._id);
  state.splice(index, 1, cluster);
};

const handleDeleteCluster = (state, action) => {
  const { cluster } = action.payload.result;
  return state.filter(el => el._id !== cluster._id);
};

// fulfilled items slice
const clusterItemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    cleanCluster: () => [],
  },
  extraReducers: builder => {
    builder
      .addCase(TNK.fetchClustersThunk.fulfilled, handleFetchClusters)
      .addCase(TNK.addClusterThunk.fulfilled, handleAddCluster)
      .addCase(TNK.updateClusterThunk.fulfilled, handleUpdateCluster)
      .addCase(
        TNK.updateClusterFavoriteThunk.fulfilled,
        handleUpdateClusterFavorite,
      )
      .addCase(TNK.deleteClusterThunk.fulfilled, handleDeleteCluster);
  },
});

// fulfilled filter slice
const clusterFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setClustersFilter: (_, action) => action.payload,
  },
});

// fulfilled active cluster slice
const clusterActiveItemSlice = createSlice({
  name: 'activeItem',
  initialState: null,
  reducers: {
    setActiveCluster: (_, action) => action.payload,
  },
});

// loading slice
const clusterIsLoadingSlice = createSlice({
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
const clusterErrorSlice = createSlice({
  name: 'error',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => false)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
      .addMatcher(isAnyOf(...fn('rejected')), (_, action) => action.payload);
  },
});

export const clustersReducer = combineReducers({
  items: clusterItemsSlice.reducer,
  activeItem: clusterActiveItemSlice.reducer,
  filter: clusterFilterSlice.reducer,
  isLoading: clusterIsLoadingSlice.reducer,
  error: clusterErrorSlice.reducer,
});

export const { cleanCluster } = clusterItemsSlice.actions;
export const { setActiveCluster } = clusterActiveItemSlice.actions;
export const { setClustersFilter } = clusterFilterSlice.actions;
