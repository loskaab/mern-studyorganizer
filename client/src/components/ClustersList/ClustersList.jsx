import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchClustersThunk } from 'store/clusters/clustersThunks';
import { useClusters } from 'utils/hooks';

import { List } from './ClustersList.styled';

const ClustersList = () => {
  const dispatch = useDispatch();
  const { clusters } = useClusters();

  useEffect(() => {
    dispatch(fetchClustersThunk());
  }, [dispatch]);

  return (
    <List reversed>
      {clusters.map(el => (
        <li key={el._id}>{el.cluster.substring(0, 49)}</li>
      ))}
    </List>
  );
};

export default ClustersList;
