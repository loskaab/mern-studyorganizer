export const selectClusters = state => state.clusters.items;
export const selectClusterGroups = state => state.clusters.groups;
export const selectActiveCluster = state => state.clusters.active;
export const selectClusterFilter = state => state.clusters.filter;
export const selectClusterSelect = state => state.clusters.select;
export const selectClusterChecked = state => state.clusters.checked;

export const selectIsLoading = state => state.clusters.isLoading;
export const selectError = state => state.clusters.error;
