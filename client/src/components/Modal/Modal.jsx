import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { backdrop, modal } from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      e.key === 'Escape' && toggleModal();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = e => e.target === e.currentTarget && toggleModal();

  return createPortal(
    <div className={backdrop} onClick={handleBackdropClick}>
      <div className={modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default Modal;
