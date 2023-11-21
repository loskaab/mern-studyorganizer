import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { LiContent } from '../ClustersList.styled';

import { updateClusterFavoriteThunk } from 'store/clusters/clustersThunks';

const Li = ({ el }) => {
  const dispatch = useDispatch();
  const { _id, cluster, title, favorite } = el;

  const trim = cluster => {
    const text = cluster.replace('https://', '').replace('http://', '');
    return text.length <= 50 ? text : text.substring(0, 49).concat('...');
  };

  const handleChange = () =>
    dispatch(updateClusterFavoriteThunk({ _id, favorite: !favorite }));

  return (
    <LiContent>
      <h3>{title}</h3>

      <input
        type="checkbox"
        name="favorite"
        checked={favorite}
        onChange={handleChange}
      />

      <a href={cluster} target="_blank" rel="noopener noreferrer">
        {trim(cluster)}
      </a>
    </LiContent>
  );
};

export default Li;

Li.propTypes = { el: PropTypes.object };
