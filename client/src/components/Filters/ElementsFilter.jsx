import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

import { selectElementsFilter } from 'store/elements/elementsSelectors';
import { setElementsFilter } from 'store/elements/elementsSlice';

import { FilterDiv, Button } from './Filters.styled';

const ElementsFilter = () => {
  const filterValue = useSelector(selectElementsFilter);
  const dispatch = useDispatch();

  // Serch on icon click
  const handleClick = e => e.target.previousElementSibling.focus();
  // Serch on change
  const handleSearch = e => {
    const filterValue = e.target.value.toLowerCase();
    dispatch(setElementsFilter(filterValue));
  };
  const handleClean = () => dispatch(setElementsFilter(''));

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

export default ElementsFilter;
