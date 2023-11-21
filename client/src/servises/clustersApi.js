import { apiClient } from './apiClient';

export const fetchClusters = async () => {
  const { data } = await apiClient.get('/clusters');
  return data;
};

export const addCluster = async cluster => {
  const { data } = await apiClient.post('/clusters', cluster);
  return data;
};

export const updateCluster = async cluster => {
  const { _id } = cluster;
  const { data } = await apiClient.put(`/clusters/${_id}`, cluster);
  return data;
};

export const updateClusterFavorite = async cluster => {
  const { _id } = cluster;
  const { data } = await apiClient.patch(`/clusters/favorite/${_id}`, cluster);
  return data;
};

export const deleteCluster = async id => {
  const { data } = await apiClient.delete(`/clusters/${id}`);
  return data;
};
