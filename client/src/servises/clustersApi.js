import { apiClient } from './apiClient';

// Clusters

export const fetchClusters = async () => {
  const { data } = await apiClient.get('/clusters');
  return data;
};

export const addCluster = async cluster => {
  const { data } = await apiClient.post('/clusters', cluster);
  return data;
};

export const updateCluster = async ({ _id, ...cluster }) => {
  const { data } = await apiClient.put(`/clusters/${_id}`, cluster);
  return data;
};

export const updateFavorite = async ({ _id, ...cluster }) => {
  const { data } = await apiClient.patch(`/clusters/favorite/${_id}`, cluster);
  return data;
};

export const deleteCluster = async id => {
  const { data } = await apiClient.delete(`/clusters/${id}`);
  return data;
};

// Groups

export const fetchGroups = async () => {
  const { data } = await apiClient.get('/clusters/groups');
  return data;
};

export const addGroup = async group => {
  const { data } = await apiClient.post('/clusters/groups', group);
  return data;
};

export const updateGroup = async ({ _id, ...group }) => {
  const { data } = await apiClient.put(`/clusters/groups/${_id}`, group);
  return data;
};

export const deleteGroup = async id => {
  const { data } = await apiClient.delete(`/clusters/groups/${id}`);
  return data;
};
