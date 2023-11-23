import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { TiStar } from 'react-icons/ti';

import { updateFavoriteThunk } from 'store/clusters/clustersThunks';

import { LiContent as Li, Label } from './Li.styled';

const LiContent = ({ el }) => {
  const dispatch = useDispatch();
  const { _id, cluster, title, favorite } = el;

  const trim = cluster => {
    const text = cluster.replace('https://', '').replace('http://', '');
    return text.length <= 50 ? text : text.substring(0, 49).concat('...');
  };

  const handleChange = () =>
    dispatch(updateFavoriteThunk({ _id, favorite: !favorite }));

  return (
    <Li $hoverd={favorite}>
      <Label>
        <input
          type="checkbox"
          name="favorite"
          checked={favorite}
          onChange={handleChange}
        />
        <TiStar size="18px" />
      </Label>

      <h3>{title}</h3>

      <a href={cluster} target="_blank" rel="noopener noreferrer">
        {trim(cluster)}
      </a>
    </Li>
  );
};

export default LiContent;

LiContent.propTypes = { el: PropTypes.object, $hoverd: PropTypes.bool };
