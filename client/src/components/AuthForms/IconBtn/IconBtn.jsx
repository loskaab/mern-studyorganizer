import PropTypes from 'prop-types';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { Button } from './IconBtn.styled';

const IconBtn = ({ toggle, setToggle }) => {
  const onClick = () => {
    if (toggle === 'text') setToggle('password');
    if (toggle === 'password') setToggle('text');
  };

  return (
    <Button type="button" onClick={onClick}>
      {toggle === 'password' && <BsEye size="18px" />}
      {toggle === 'text' && <BsEyeSlash size="18px" />}
    </Button>
  );
};

export default IconBtn;

IconBtn.propTypes = {
  setToggle: PropTypes.func.isRequired,
  toggle: PropTypes.string.isRequired,
};
