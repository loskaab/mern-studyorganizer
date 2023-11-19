import { useSelector } from 'react-redux';

import * as selectors from 'store/clusters/clustersSelectors';

export const useClusters = () => {
  const allClusters = useSelector(selectors.selectClusters);
  const activeCluster = useSelector(selectors.selectActiveCluster);
  const filterValue = useSelector(selectors.selectFilterValue);

  const error = useSelector(selectors.selectError);
  const isLoading = useSelector(selectors.selectIsLoading);

  return { allClusters, activeCluster, filterValue, error, isLoading };
};
