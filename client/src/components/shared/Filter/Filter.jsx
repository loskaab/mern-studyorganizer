import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

import { FilterDiv, Button } from './Filter.styled';

const Filter = ({ selector, reducer }) => {
  const filterValue = useSelector(selector);
  const dispatch = useDispatch();

  // Serch on icon click
  const handleClick = e => e.target.previousElementSibling.focus();
  // Serch on change
  const handleSearch = e => {
    const filterValue = e.target.value.toLowerCase();
    dispatch(reducer(filterValue));
  };
  const handleClean = () => dispatch(reducer(''));

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

export default Filter;

Filter.propTypes = {
  selector: PropTypes.func.isRequired,
  reducer: PropTypes.func.isRequired,
};
