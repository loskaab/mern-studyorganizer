import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { TiStar } from 'react-icons/ti';
import { FiTrash2 } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';

import { useClusters } from 'utils/hooks';
import { setActiveCluster, setClusterTrash } from 'store/cluster/clusterSlice';
import {
  updateFavoriteThunk,
  updateCheckedThunk,
} from 'store/cluster/clusterThunks';

import {
  LiCluster as Li,
  ElementLink,
  ClusterLink,
  LabelFavorite,
  LabelChecked,
  TrashBtn,
} from './Li.styled';

const LiCluster = ({ el }) => {
  const dispatch = useDispatch();
  const { clusterTrash } = useClusters();

  const { _id, cluster, title, favorite, checked } = el;
  const isInTrash = clusterTrash.find(el => el._id === _id);

  const trim = cluster => {
    const text = cluster.replace('https://', '').replace('http://', '');
    return text.length <= 30 ? text : text.substring(0, 29).concat('...');
  };

  const changeFavorite = () => {
    dispatch(updateFavoriteThunk({ _id, favorite: !favorite }));
  };

  const setActive = () => dispatch(setActiveCluster(el));

  const changeChecked = () => {
    dispatch(updateCheckedThunk({ _id, checked: !checked }));
  };

  const changeTrash = () => dispatch(setClusterTrash(el));

  return (
    <Li>
      <LabelFavorite $hovered={favorite}>
        <input
          type="checkbox"
          name="favorite"
          checked={favorite}
          onChange={changeFavorite}
        />
        <TiStar size="18px" />
      </LabelFavorite>

      <ElementLink onClick={setActive} to={`/element/${_id}`}>
        {title}
      </ElementLink>

      <ClusterLink href={cluster} target="_blank" rel="noopener noreferrer">
        {trim(cluster)}
      </ClusterLink>

      <TrashBtn $hovered={isInTrash} onClick={changeTrash}>
        <FiTrash2 size="16px" />
      </TrashBtn>

      <LabelChecked $hovered={checked}>
        <input
          type="checkbox"
          name="checked"
          checked={checked}
          onChange={changeChecked}
        />
        <FaCheck size="15px" />
      </LabelChecked>
    </Li>
  );
};

export default LiCluster;

LiCluster.propTypes = { el: PropTypes.object, $hovered: PropTypes.bool };
