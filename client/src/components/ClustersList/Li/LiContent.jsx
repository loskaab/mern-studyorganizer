import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { TiStar } from 'react-icons/ti';

import { updateClusterFavoriteThunk } from 'store/clusters/clustersThunks';
import { themes } from 'styles/themes';

import { LiContent as Li, Label } from './Li.styled';

const LiContent = ({ el }) => {
  const dispatch = useDispatch();
  const { _id, cluster, title, favorite } = el;
  const { yellow, border } = themes.colors;

  const trim = cluster => {
    const text = cluster.replace('https://', '').replace('http://', '');
    return text.length <= 50 ? text : text.substring(0, 49).concat('...');
  };

  const handleChange = () =>
    dispatch(updateClusterFavoriteThunk({ _id, favorite: !favorite }));

  return (
    <Li>
      <Label>
        <input
          type="checkbox"
          name="favorite"
          checked={favorite}
          onChange={handleChange}
        />

        <TiStar
          size="20px"
          color={favorite ? yellow : 'transparent'}
          stroke={favorite ? yellow : border}
          strokeWidth="2.5px"
        />
      </Label>

      <h3>{title}</h3>

      <a href={cluster} target="_blank" rel="noopener noreferrer">
        {trim(cluster)}
      </a>
    </Li>
  );
};

export default LiContent;

LiContent.propTypes = { el: PropTypes.object };
