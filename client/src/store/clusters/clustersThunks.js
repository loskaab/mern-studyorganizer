import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'servises/clustersApi';

// Clusters

export const fetchClustersThunk = createAsyncThunk(
  'items/fetchClusters',
  async (_, thunkAPI) => {
    try {
      return await API.fetchClusters();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addClusterThunk = createAsyncThunk(
  'items/addCluster',
  async (cluster, thunkAPI) => {
    try {
      return await API.addCluster(cluster);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateClusterThunk = createAsyncThunk(
  'items/updateCluster',
  async (cluster, thunkAPI) => {
    try {
      return await API.updateCluster(cluster);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateFavoriteThunk = createAsyncThunk(
  'items/updateFavorite',
  async (cluster, thunkAPI) => {
    try {
      return await API.updateFavorite(cluster);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteClusterThunk = createAsyncThunk(
  'items/deleteCluster',
  async (id, thunkAPI) => {
    try {
      return await API.deleteCluster(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Groups

export const fetchGroupsThunk = createAsyncThunk(
  'items/fetchGroups',
  async (_, thunkAPI) => {
    try {
      return await API.fetchGroups();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addGroupThunk = createAsyncThunk(
  'items/addGroup',
  async (group, thunkAPI) => {
    try {
      return await API.addGroup(group);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateGroupThunk = createAsyncThunk(
  'items/updateGroup',
  async (group, thunkAPI) => {
    try {
      return await API.updateGroup(group);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteGroupThunk = createAsyncThunk(
  'items/deleteGroup',
  async (id, thunkAPI) => {
    try {
      return await API.deleteGroup(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
