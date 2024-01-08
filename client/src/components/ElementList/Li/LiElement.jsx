import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TiStar } from 'react-icons/ti';
import { FaCheck } from 'react-icons/fa';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import Modal from 'components/shared/Modal/Modal';
import { useElements } from 'utils/hooks';
import { updateElementThunk } from 'store/element/elementThunks';
import { setElementTrash } from 'store/element/elementSlice';

import {
  Li,
  Divider,
  LabelFavorite,
  LabelChecked,
  TrashBtn,
  EditBtn,
} from './LiElement.styled';

const LiElement = ({ el }) => {
  const dispatch = useDispatch();
  const { elementTrash } = useElements();
  const [isModal, setIsModal] = useState(false);

  const { _id, element, title, favorite, checked, createdAt } = el;
  const isInTrash = elementTrash.find(el => el._id === _id);

  const handleFavorite = () => {
    dispatch(updateElementThunk({ _id, favorite: !favorite }));
  };

  const handleChecked = () => {
    dispatch(updateElementThunk({ _id, checked: !checked }));
  };

  const handleTrash = () => dispatch(setElementTrash(el));

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

      {element}
      <Divider />
      <span>translation</span>

      <FlexWrap $h="100%" $p="0" $fd="column">
        <TrashBtn $hovered={isInTrash} onClick={handleTrash}>
          <FiTrash2 size="16px" />
        </TrashBtn>

        <EditBtn onClick={() => setIsModal('edit')}>
          <FiEdit3 size="15px" />
        </EditBtn>
      </FlexWrap>

      {isModal && (
        <Modal onClick={() => setIsModal(false)}>
          {/* <EditClusterForm el={el} setIsModal={setIsModal} /> */}
        </Modal>
      )}
    </Li>
  );
};

export default LiElement;

LiElement.propTypes = { el: PropTypes.object };
