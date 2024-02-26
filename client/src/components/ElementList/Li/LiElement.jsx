import PropTypes from 'prop-types';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TiStar } from 'react-icons/ti';
import { FaCheck } from 'react-icons/fa';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import { useElements } from 'utils/hooks';
import { updateElementThunk } from 'store/element/elementThunks';
import { setElementTrash } from 'store/element/elementSlice';

import Element from './Element/Element';
import {
  Li,
  LabelFavorite,
  LabelChecked,
  TrashBtn,
  EditBtn,
} from './LiElement.styled';
import ElEditForm from './Element/ElEditForm';

const LiElement = ({ el, sortByDate, setSortByDate }) => {
  const dispatch = useDispatch();
  const { elementTrash } = useElements();
  const [isForm, setIsForm] = useState(false);

  const { _id, favorite, checked } = el;
  const isInTrash = elementTrash.find(el => el._id === _id);

  const handleFavorite = () => {
    dispatch(updateElementThunk({ _id, favorite: !favorite }));
  };

  const handleChecked = () => {
    dispatch(updateElementThunk({ _id, checked: !checked }));
  };

  const handleTrash = () => dispatch(setElementTrash(el));

  const handleEdit = e => {
    if (isForm) {
      setIsForm(false);
    } else {
      const height = e.target.closest('div').clientHeight;
      setIsForm(height);
    }
  };

  return (
    <Li>
      <FlexWrap $h="100%" $p="0" $fd="column">
        <LabelFavorite $hovered={favorite}>
          <input
            type="checkbox"
            name="favorite"
            checked={favorite}
            onChange={handleFavorite}
          />
          <TiStar size="20px" />
        </LabelFavorite>

        <LabelChecked $hovered={checked}>
          <input
            type="checkbox"
            name="checked"
            checked={checked}
            onChange={handleChecked}
          />
          <FaCheck size="15px" />
        </LabelChecked>
      </FlexWrap>

      {isForm && <ElEditForm el={el} isForm={isForm} setIsForm={setIsForm} />}
      {!isForm && (
        <Element
          el={el}
          sortByDate={sortByDate}
          setSortByDate={setSortByDate}
        />
      )}

      <FlexWrap $h="100%" $p="0" $fd="column">
        <TrashBtn $hovered={isInTrash} onClick={handleTrash}>
          <FiTrash2 size="16px" />
        </TrashBtn>

        <EditBtn onClick={handleEdit}>
          <FiEdit3 size="15px" />
        </EditBtn>
      </FlexWrap>
    </Li>
  );
};

export default LiElement;

LiElement.propTypes = {
  el: PropTypes.object,
  sortByDate: PropTypes.bool,
  setSortByDate: PropTypes.func,
};
