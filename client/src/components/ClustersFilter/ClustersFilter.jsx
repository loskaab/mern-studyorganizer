import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';

import { selectClustersFilter } from 'store/clusters/clustersSelectors';
import { setClustersFilter } from 'store/clusters/clustersSlice';

import { Div, Button } from './ClustersFilter.styled';

const Filter = () => {
  const filterValue = useSelector(selectClustersFilter);
  const dispatch = useDispatch();

  const handleClick = e => e.target.previousElementSibling.focus();
  const handleSearch = e => dispatch(setClustersFilter(e.target.value));

  return (
    <Div>
      <input
        type="text"
        name="filter"
        placeholder="Search"
        value={filterValue}
        onChange={handleSearch}
      />
      <BsSearch size="16" onClick={handleClick} />
      {filterValue && <Button onClick={handleSearch}>✕</Button>}
    </Div>
  );
};

export default Filter;
