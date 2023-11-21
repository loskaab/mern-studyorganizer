import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'servises/clustersApi';

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

export const updateClusterFavoriteThunk = createAsyncThunk(
  'items/updateClusterFavorite',
  async (cluster, thunkAPI) => {
    try {
      return await API.updateClusterFavorite(cluster);
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
