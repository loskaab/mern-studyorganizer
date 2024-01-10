import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Filter from 'components/shared/Filter/Filter';
import Select from 'components/shared/Select/Select';
import { baseOptions } from 'components/shared/Select/options/baseOptions';
import { useClusters } from 'utils/hooks';
import { selectClusterFilter } from 'store/cluster/clusterSelectors';
import { setClusterFilter, setClusterSelect } from 'store/cluster/clusterSlice';
import { themes } from 'styles/themes';

const { s, m } = themes.indents;
const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;

const ClustersSearchBar = () => {
  const dispatch = useDispatch();
  const { clusterGroups, clusterSelect } = useClusters();

  const [selectValue, setSelectValue] = useState(clusterSelect);

  useEffect(() => {
    dispatch(setClusterSelect(selectValue));
  }, [dispatch, selectValue]);

  const getOptions = selectValue => {
    const options = [
      ...baseOptions,
      ...clusterGroups
        .map(el => ({ value: el.clusterGroup, label: el.clusterGroup }))
        .sort((a, b) => a.value.localeCompare(b.value)),
    ];
    if (selectValue.includes('checked')) {
      return options.filter(el => el.value !== 'unchecked');
    }
    if (selectValue.includes('unchecked')) {
      return options.filter(el => el.value !== 'checked');
    }
    if (selectValue.includes('recent')) {
      return options.filter(el => el.value !== 'trash');
    } else {
      return options;
    }
  };

  const defaultValue = getOptions(selectValue).filter(el => {
    return clusterSelect.includes(el.value);
  });

  return (
    <GridWrap $w="100%" $m={`0 ${s} 0 0 `} $cg={s} $ai="center" $gtc="1fr 2fr">
      <Filter selector={selectClusterFilter} reducer={setClusterFilter} />
      <Select
        isMulti
        onChange={data => setSelectValue(data ? data.map(el => el.value) : '')}
        defaultValue={defaultValue}
        isClearable={selectValue}
        options={getOptions(selectValue)}
        $ol={ol}
        $b={b}
        $bh={bh}
        $br={m}
      />
    </GridWrap>
  );
};

export default ClustersSearchBar;
