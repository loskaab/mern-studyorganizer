import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { TiStar } from 'react-icons/ti';
import { FaCheck } from 'react-icons/fa';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

import { useClusters, useElements } from 'utils/hooks';
import { getDate } from 'utils/helpers';
import { setActiveCluster, setClusterTrash } from 'store/cluster/clusterSlice';
import { updateClusterThunk } from 'store/cluster/clusterThunks';
import Modal from 'components/shared/Modal/Modal';
import EditClusterForm from 'components/ClusterForms/ClusterEditForm';

import {
  LiCluster as Li,
  TitleLink,
  ClusterLink,
  LabelFavorite,
  LabelChecked,
  DateBtn,
  EditBtn,
  TrashBtn,
  CountSpan,
} from './Li.styled';

const LiCluster = ({ el, sortByDate, setSortByDate }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeCluster, clusterTrash } = useClusters();
  const { allElements } = useElements();
  const [isModal, setIsModal] = useState(false);

  const { _id, cluster, title, favorite, checked, createdAt } = el;

  const trim = link => {
    const text = link
      .replace('https://drive.', '')
      .replace('google.com/', '')
      .replace('https://', '')
      .replace('http://', '')
      .replace('www.', '');
    return text.length <= 30 ? text : text.substring(0, 19).concat('...');
  };

  const elementCount = allElements.filter(el => el.cluster === _id).length;

  const handleFavorite = () => {
    dispatch(updateClusterThunk({ _id, favorite: !favorite }));
  };

  const handleLink = () => {
    dispatch(setActiveCluster(el));
    if (el?._id === activeCluster?._id) {
      navigate(`/element/${_id}`, { replace: true });
    }
  };

  const handleTrash = () => dispatch(setClusterTrash(el));
  const isInTrash = clusterTrash.find(el => el._id === _id);

  const handleChecked = () => {
    dispatch(updateClusterThunk({ _id, checked: !checked }));
  };

  const handleSort = () => {
    setSortByDate(!sortByDate);
    sortByDate
      ? toast.success('Ascending by Title')
      : toast.success('Ascending by Date');
  };

  return (
    <Li $active={_id === activeCluster?._id}>
      <LabelFavorite $hovered={favorite}>
        <input
          type="checkbox"
          name="favorite"
          checked={favorite}
          onChange={handleFavorite}
        />
        <TiStar size="20px" />
      </LabelFavorite>

      <TitleLink onClick={handleLink}>{title}</TitleLink>

      <ClusterLink href={cluster} target="_blank" rel="noopener noreferrer">
        {trim(cluster)}
      </ClusterLink>

      <CountSpan>{elementCount > 0 && elementCount}</CountSpan>

      <EditBtn onClick={() => setIsModal('edit')}>
        <FiEdit3 size="15px" />
      </EditBtn>

      <TrashBtn $hovered={isInTrash} onClick={handleTrash}>
        <FiTrash2 size="16px" />
      </TrashBtn>

      <LabelChecked $hovered={checked}>
        <input
          type="checkbox"
          name="checked"
          checked={checked}
          onChange={handleChecked}
        />
        <FaCheck size="15px" />
      </LabelChecked>

      <DateBtn onClick={handleSort}>{getDate(createdAt)}</DateBtn>

      {isModal && (
        <Modal onClick={() => setIsModal(false)}>
          <EditClusterForm el={el} setIsModal={setIsModal} />
        </Modal>
      )}
    </Li>
  );
};

export default LiCluster;

LiCluster.propTypes = {
  el: PropTypes.object,
  sortByDate: PropTypes.bool,
  setSortByDate: PropTypes.func,
  $active: PropTypes.bool,
  $hovered: PropTypes.bool,
};
