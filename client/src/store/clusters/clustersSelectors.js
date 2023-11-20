export const selectClusters = state => state.clusters.items;
export const selectActiveCluster = state => state.clusters.activeItem;
export const selectClustersFilter = state => state.clusters.filter;

export const selectIsLoading = state => state.clusters.isLoading;
export const selectError = state => state.clusters.error;
