import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Select from 'components/shared/Select/Select';
import Filter from 'components/shared/Filter/Filter';
import { useClusters } from 'utils/hooks';
import { selectClusterFilter } from 'store/cluster/clusterSelectors';
import { setClusterFilter, setClusterSelect } from 'store/cluster/clusterSlice';
import { themes } from 'styles/themes';

const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;

const ClustersSearchBar = () => {
  const dispatch = useDispatch();
  const [group, setGroup] = useState('');
  const { clusterGroups } = useClusters();

  useEffect(() => {
    dispatch(setClusterSelect(group));
  }, [dispatch, group]);

  const options = clusterGroups
    .map(el => ({ value: el.clusterGroup, label: el.clusterGroup }))
    .sort((a, b) => a.value.localeCompare(b.value));

  return (
    <GridWrap $w="55%" $cg="20px" $ai="center" $gtc="2fr 1fr">
      <Filter selector={selectClusterFilter} reducer={setClusterFilter} />
      <Select
        onChange={data => setGroup(data ? data.value : '')}
        isClearable={group}
        options={options}
        $ol={ol}
        $b={b}
        $bh={bh}
      />
    </GridWrap>
  );
};

export default ClustersSearchBar;
