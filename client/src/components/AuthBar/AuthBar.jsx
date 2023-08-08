import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Modal from 'components/Modal/Modal';
import clN from 'services/classNames';
// eslint-disable-next-line import/order
import { btn, btn_avatar, btn_link } from 'styles/common/Buttons.module.scss';
import { nav_link } from './AuthBar.module.scss';

const AuthBar = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(prevState => !prevState);
  };

  const handleLogout = () => {
    toggleModal();
    console.log('log out');
  };

  const handleSendFeedback = () => {
    toggleModal();
    console.log('send feedback');
  };

  return (
    <div>
      <NavLink className={clN(nav_link, btn)} to="/auth/signin">
        Log in
      </NavLink>

      <button className={btn_avatar} onClick={toggleModal} type="button">
        UI
      </button>
      {isModal && (
        <Modal toggleModal={toggleModal}>
          <Link className={btn_link} onClick={toggleModal} to="/users">
            Edit user profile
          </Link>
          <button className={btn_link} onClick={handleSendFeedback} type="button">
            Send feedback
          </button>
          <button className={btn_link} onClick={handleLogout} type="button">
            Log out
          </button>
        </Modal>
      )}
    </div>
  );
};

export default AuthBar;
