import PropTypes from 'prop-types';

import { LiContent } from '../ClustersList.styled';

const Li = ({ $el }) => {
  const clusterImage = cluster => {
    const text = cluster.replace('https://', '').replace('http://', '');
    return text.length <= 50 ? text : text.substring(0, 49).concat('...');
  };

  return (
    <LiContent>
      <h3>{$el.title}</h3>
      <a href={$el.cluster} target="_blank" rel="noopener noreferrer">
        {clusterImage($el.cluster)}
      </a>
      {$el.checked && <span>OK</span>}
    </LiContent>
  );
};

export default Li;

Li.propTypes = { $el: PropTypes.object };
