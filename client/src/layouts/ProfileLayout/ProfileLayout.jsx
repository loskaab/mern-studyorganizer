import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop } from './ProfileLayout.styled';

const modalRoot = document.querySelector('#modal');

const ProfileLayout = ({ onClick, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      e.key === 'Escape' && onClick();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  const handleBackdropClick = e => e.target === e.currentTarget && onClick();

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <div>{children}</div>
    </Backdrop>,
    modalRoot,
  );
};

export default ProfileLayout;

ProfileLayout.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
