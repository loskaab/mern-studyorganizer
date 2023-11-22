import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

import { selectClustersFilter } from 'store/clusters/clustersSelectors';
import { setClustersFilter } from 'store/clusters/clustersSlice';

import { FilterDiv, Button } from './Filters.styled';

const ClustersFilter = () => {
  const filterValue = useSelector(selectClustersFilter);
  const dispatch = useDispatch();

  // Serch on icon click
  const handleClick = e => e.target.previousElementSibling.focus();
  // Serch on change
  const handleSearch = e => {
    const filterValue = e.target.value.toLowerCase();
    dispatch(setClustersFilter(filterValue));
  };
  const handleClean = () => dispatch(setClustersFilter(''));

  return (
    <FilterDiv>
      <input
        type="text"
        name="filter"
        placeholder="Search"
        autoComplete="off"
        value={filterValue}
        onChange={handleSearch}
      />

      <BsSearch size="16" onClick={handleClick} />

      {filterValue && (
        <Button onClick={handleClean}>
          <IoClose size="16" />
        </Button>
      )}
    </FilterDiv>
  );
};

export default ClustersFilter;
