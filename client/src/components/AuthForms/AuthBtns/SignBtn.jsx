import PropTypes from 'prop-types';

import { SignButton } from './AuthBtns.styled';

const SignBtn = ({ onClick, disabled, children }) => {
  return (
    <SignButton onClick={onClick} type="submit" disabled={disabled}>
      {children}
    </SignButton>
  );
};

export default SignBtn;

SignButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]).isRequired,
};
