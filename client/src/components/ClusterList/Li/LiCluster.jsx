import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { TiStar } from 'react-icons/ti';
import { FaCheck } from 'react-icons/fa';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

import { useClusters } from 'utils/hooks';
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
} from './Li.styled';

const LiCluster = ({ el, sortByDate, setSortByDate }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeCluster, clusterTrash } = useClusters();
  const [isModal, setIsModal] = useState(false);

  const { _id, cluster, title, favorite, checked, createdAt } = el;

  const date = new Date(createdAt).toLocaleDateString('ro-RO', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });

  const isInTrash = clusterTrash.find(el => el._id === _id);

  const trim = cluster => {
    const text = cluster.replace('https://', '').replace('http://', '');
    return text.length <= 30 ? text : text.substring(0, 29).concat('...');
  };

  const handleFavorite = () => {
    dispatch(updateClusterThunk({ _id, favorite: !favorite }));
  };

  const handleLinkClick = () => {
    dispatch(setActiveCluster(el));
    if (el._id === activeCluster._id) {
      navigate(`/element/${_id}`, { replace: true });
    }
  };

  const handleChecked = () => {
    dispatch(updateClusterThunk({ _id, checked: !checked }));
  };

  const handleTrash = () => dispatch(setClusterTrash(el));

  const handleSort = () => {
    setSortByDate(!sortByDate);
    sortByDate
      ? toast.success('Ascend by Title')
      : toast.success('Descend by Date');
  };

  return (
    <Li>
      <LabelFavorite $hovered={favorite}>
        <input
          type="checkbox"
          name="favorite"
          checked={favorite}
          onChange={handleFavorite}
        />
        <TiStar size="20px" />
      </LabelFavorite>

      <TitleLink onClick={handleLinkClick}>{title}</TitleLink>

      <ClusterLink href={cluster} target="_blank" rel="noopener noreferrer">
        {trim(cluster)}
      </ClusterLink>

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

      <DateBtn onClick={handleSort}>{date}</DateBtn>

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
  $hovered: PropTypes.bool,
};
