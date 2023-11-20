import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';

import { selectElementsFilter } from 'store/elements/elementsSelectors';
import { setElementsFilter } from 'store/elements/elementsSlice';

import { Div, Button } from './Filter.styled';

const Filter = () => {
  const filterValue = useSelector(selectElementsFilter);
  const dispatch = useDispatch();

  const handleClick = e => e.target.previousElementSibling.focus();
  const handleSearch = e => dispatch(setElementsFilter(e.target.value));

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
