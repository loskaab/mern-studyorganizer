import GridWrap from 'components/shared/GridWrap/GridWrap';
import Select from 'components/shared/Select/Select';
import Filter from 'components/shared/Filter/Filter';
import { selectClustersFilter } from 'store/clusters/clustersSelectors';
import { setClustersFilter } from 'store/clusters/clustersSlice';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const ClustersSearchBar = () => {
  return (
    <GridWrap $w="55%" $cg="20px" $ai="center" $gtc="2fr 1fr">
      <Filter select={selectClustersFilter} set={setClustersFilter} />
      <Select options={options} />
    </GridWrap>
  );
};

export default ClustersSearchBar;
