import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useClusters, useElements } from 'utils/hooks';
import { fetchElementsThunk } from 'store/element/elementThunks';

import { List } from './ElementList.styled';
import LiElement from './Li/Li';

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
    <List>
      {activeClusterElements.map(el => (
        <LiElement key={el._id} el={el} />
      ))}
    </List>
  );
};

export default ElementList;
