import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchClustersThunk } from 'store/clusters/clustersThunks';
import { useClusters } from 'utils/hooks';

import { List, Li, HeadLi } from './ClustersList.styled';

const ClustersList = () => {
  const dispatch = useDispatch();
  const { allClusters } = useClusters();

  const clusterImage = cluster =>
    cluster.length <= 50 ? cluster : cluster.substring(0, 49).concat('...');

  useEffect(() => {
    dispatch(fetchClustersThunk());
  }, [dispatch]);

  return (
    <List reversed>
      <HeadLi>
        <span>Title</span>
        <span>Cluster</span>
        <span>Result</span>
      </HeadLi>
      {allClusters.map(el => (
        <Li key={el._id}>
          <h2>{el.title}</h2>
          <a href={el.cluster} target="_blank" rel="noopener noreferrer">
            {clusterImage(el.cluster)}
          </a>
          {el.checked && <span>Checked</span>}
        </Li>
      ))}
    </List>
  );
};

export default ClustersList;
