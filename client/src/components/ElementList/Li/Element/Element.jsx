import PropTypes from 'prop-types';

import { GridWrap, Divider } from './Element.styled';

const Element = ({ el }) => {
  const { element, caption } = el;

  return (
    <GridWrap>
      {element}
      <Divider />
      {caption}
    </GridWrap>
  );
};

export default Element;

Element.propTypes = { el: PropTypes.object };
