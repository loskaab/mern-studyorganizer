import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useClusters, useElements } from 'utils/hooks';
import { fetchElementsThunk } from 'store/element/elementThunks';

const ElementList = () => {
  const dispatch = useDispatch();
  const { activeCluster } = useClusters();
  const { allElements } = useElements();

  useEffect(() => {
    dispatch(fetchElementsThunk());
  }, [dispatch]);

  const activeClusterElements = allElements
    .filter(el => el.cluster === activeCluster.title)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  return (
    <div>
      <h2>
        {activeCluster.group} {activeCluster.title}
      </h2>

      {activeClusterElements.map(el => (
        <p key={el._id}>{el.element}</p>
      ))}
    </div>
  );
};

export default ElementList;
