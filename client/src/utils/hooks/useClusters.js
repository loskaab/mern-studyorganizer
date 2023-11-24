import { useSelector } from 'react-redux';

import * as selectors from 'store/clusters/clustersSelectors';

export const useClusters = () => {
  const allClusters = useSelector(selectors.selectClusters);
  const clusterGroups = useSelector(selectors.selectClusterGroups);
  const clustersFilter = useSelector(selectors.selectClustersFilter);
  const activeCluster = useSelector(selectors.selectActiveCluster);

  const error = useSelector(selectors.selectError);
  const isLoading = useSelector(selectors.selectIsLoading);

  return {
    allClusters,
    clusterGroups,
    clustersFilter,
    activeCluster,
    error,
    isLoading,
  };
};
