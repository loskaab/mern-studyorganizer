import { useSelector } from 'react-redux';

import * as selectors from 'store/cluster/clusterSelectors';

export const useClusters = () => {
  const allClusters = useSelector(selectors.selectClusters);
  const clusterGroups = useSelector(selectors.selectClusterGroups);
  const clusterFilter = useSelector(selectors.selectClusterFilter);
  const activeCluster = useSelector(selectors.selectActiveCluster);

  const error = useSelector(selectors.selectError);
  const isLoading = useSelector(selectors.selectIsLoading);

  return {
    allClusters,
    clusterGroups,
    clusterFilter,
    activeCluster,
    error,
    isLoading,
  };
};
