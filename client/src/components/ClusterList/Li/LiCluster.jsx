import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { TiStar } from 'react-icons/ti';
import { FiTrash2 } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';

import {
  updateFavoriteThunk,
  updateCheckedThunk,
  deleteClusterThunk,
} from 'store/cluster/clusterThunks';

import {
  LiCluster as Li,
  LabelFavorite,
  LabelChecked,
  DelBtn,
} from './Li.styled';

const LiCluster = ({ el }) => {
  const dispatch = useDispatch();
  const { _id, cluster, title, favorite, checked } = el;

  const trim = cluster => {
    const text = cluster.replace('https://', '').replace('http://', '');
    return text.length <= 50 ? text : text.substring(0, 49).concat('...');
  };

  const handleChangeFavorite = () => {
    dispatch(updateFavoriteThunk({ _id, favorite: !favorite }));
  };

  const handleChangeChecked = () => {
    dispatch(updateCheckedThunk({ _id, checked: !checked }));
  };

  const handleDelete = () => {
    dispatch(deleteClusterThunk(_id));
  };

  return (
    <Li>
      <LabelFavorite $hovered={favorite}>
        <input
          type="checkbox"
          name="favorite"
          checked={favorite}
          onChange={handleChangeFavorite}
        />
        <TiStar size="18px" />
      </LabelFavorite>

      <h3>{title}</h3>

      <a href={cluster} target="_blank" rel="noopener noreferrer">
        {trim(cluster)}
      </a>

      <DelBtn onClick={handleDelete}>
        <FiTrash2 size="16px" />
      </DelBtn>

      <LabelChecked $hovered={checked}>
        <input
          type="checkbox"
          name="checked"
          checked={checked}
          onChange={handleChangeChecked}
        />
        <FaCheck size="15px" />
      </LabelChecked>
    </Li>
  );
};

export default LiCluster;

LiCluster.propTypes = { el: PropTypes.object, $hovered: PropTypes.bool };
