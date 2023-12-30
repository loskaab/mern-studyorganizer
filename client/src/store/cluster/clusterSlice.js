import { createSlice, isAnyOf, combineReducers } from '@reduxjs/toolkit';

import * as TNK from './clusterThunks';

const thunkArr = [
  // Clusters
  TNK.fetchClustersThunk,
  TNK.addClusterThunk,
  TNK.updateClusterThunk,
  TNK.updateFavoriteThunk,
  TNK.deleteClusterThunk,
  // Groups
  TNK.fetchGroupsThunk,
  TNK.addGroupThunk,
  TNK.updateGroupThunk,
  TNK.deleteGroupThunk,
];
const fn = type => thunkArr.map(el => el[type]);

// Clusters

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

const handleDeleteCluster = (state, action) => {
  const { cluster } = action.payload.result;
  return state.filter(el => el._id !== cluster._id);
};

const handleUpdateFavorite = (state, action) => {
  const { cluster } = action.payload.result;
  const index = state.findIndex(el => el._id === cluster._id);
  state.splice(index, 1, cluster);
};

const handleUpdateChecked = (state, action) => {
  const { cluster } = action.payload.result;
  const index = state.findIndex(el => el._id === cluster._id);
  state.splice(index, 1, cluster);
};

// Groups

const handleFetchGroups = (_, action) => {
  return action.payload.result.groups;
};

const handleAddGroup = (state, action) => {
  state.unshift(action.payload.result.group);
};

const handleUpdateGroup = (state, action) => {
  const { group } = action.payload.result;
  const index = state.findIndex(el => el._id === group._id);
  state.splice(index, 1, group);
};

const handleDeleteGroup = (state, action) => {
  const { group } = action.payload.result;
  return state.filter(el => el._id !== group._id);
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
      .addCase(TNK.deleteClusterThunk.fulfilled, handleDeleteCluster)
      .addCase(TNK.updateFavoriteThunk.fulfilled, handleUpdateFavorite)
      .addCase(TNK.updateCheckedThunk.fulfilled, handleUpdateChecked);
  },
});

// fulfilled groups slice
const clusterGroupsSlice = createSlice({
  name: 'groups',
  initialState: [],
  reducers: {
    cleanGroup: () => [],
  },
  extraReducers: builder => {
    builder
      .addCase(TNK.fetchGroupsThunk.fulfilled, handleFetchGroups)
      .addCase(TNK.addGroupThunk.fulfilled, handleAddGroup)
      .addCase(TNK.updateGroupThunk.fulfilled, handleUpdateGroup)
      .addCase(TNK.deleteGroupThunk.fulfilled, handleDeleteGroup);
  },
});

// fulfilled active cluster slice
const clusterActiveSlice = createSlice({
  name: 'active',
  initialState: null,
  reducers: {
    setActiveCluster: (_, action) => action.payload,
  },
});

// fulfilled filter slice
const clusterFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setClusterFilter: (_, action) => action.payload,
  },
});

// fulfilled select slice
const clusterSelectSlice = createSlice({
  name: 'select',
  initialState: '',
  reducers: {
    setClusterSelect: (_, action) => action.payload,
  },
});

// fulfilled checked slice
const clusterCheckedSlice = createSlice({
  name: 'checked',
  initialState: false,
  reducers: {
    setClusterChecked: (_, action) => action.payload,
  },
});

// fulfilled trash slice
const clusterTrashSlice = createSlice({
  name: 'trash',
  initialState: [],
  reducers: {
    setClusterTrash: (state, { payload }) => {
      const isInTrash = state.find(el => el._id === payload._id);
      if (isInTrash) {
        return state.filter(el => el._id !== payload._id);
      } else {
        state.push(payload);
      }
    },
    emptyClusterTrash: () => [],
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
  groups: clusterGroupsSlice.reducer,
  active: clusterActiveSlice.reducer,
  filter: clusterFilterSlice.reducer,
  select: clusterSelectSlice.reducer,
  checked: clusterCheckedSlice.reducer,
  trash: clusterTrashSlice.reducer,

  isLoading: clusterIsLoadingSlice.reducer,
  error: clusterErrorSlice.reducer,
});

export const { cleanCluster } = clusterItemsSlice.actions;
export const { cleanGroup } = clusterGroupsSlice.actions;
export const { setActiveCluster } = clusterActiveSlice.actions;
export const { setClusterFilter } = clusterFilterSlice.actions;
export const { setClusterSelect } = clusterSelectSlice.actions;
export const { setClusterChecked } = clusterCheckedSlice.actions;
export const { setClusterTrash, emptyClusterTrash } = clusterTrashSlice.actions;
