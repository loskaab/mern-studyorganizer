import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
// import clsx from 'clsx';

import Modal from 'components/shared/Modal/Modal';
// eslint-disable-next-line import/order
import { btn_nav, btn_user, btn_modal } from 'styles/common/Buttons.module.scss';
import { navlink, active } from './HeadBar.module.scss';

// вместо classNames
// import css from "./Alert.module.css";
// export const Alert = ({ variant, children }) => {
// return <p className={clsx(css.alert, css[variant])}>{children}</p>;
// };

// композиция классов composess
// .alert {
//   margin: 8px;
//   padding: 12px 16px;
// };
// .info {
//   composes: alert;
//   background-color: blue;
// }

const AuthBar = () => {
  const [isModal, setIsModal] = useState(false);
  const { pathname } = useLocation();

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
      <NavLink
        className={classNames(btn_nav, navlink, pathname === '/auth/signup' && active)}
        to="/auth/signin"
      >
        Log in
      </NavLink>

      <button className={btn_user} onClick={toggleModal} type="button">
        UI
      </button>
      {isModal && (
        <Modal toggleModal={toggleModal}>
          <span>name</span>
          <span>email@gmail.com</span>

          <Link className={btn_modal} onClick={toggleModal} to="/users">
            Manage profile
          </Link>

          <div className={btn_modal} onClick={handleSendFeedback}>
            Send feedback
          </div>
          <div className={btn_modal} onClick={handleLogout}>
            Log out
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AuthBar;
