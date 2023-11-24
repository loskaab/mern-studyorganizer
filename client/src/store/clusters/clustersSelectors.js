export const selectClusters = state => state.clusters.items;
export const selectClusterGroups = state => state.clusters.groups;
export const selectClustersFilter = state => state.clusters.filter;
export const selectActiveCluster = state => state.clusters.activeItem;

export const selectIsLoading = state => state.clusters.isLoading;
export const selectError = state => state.clusters.error;
