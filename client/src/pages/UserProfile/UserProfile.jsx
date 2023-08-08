import { btn_link } from 'styles/common/Buttons.module.scss';

import css from './UserProfile.module.scss';

const UserProfile = () => {
  return (
    <div className={css.user_profile}>
      <button className={btn_link} type="button">
        Update avatar
      </button>
      <button className={btn_link} type="button">
        Change name
      </button>
      <button className={btn_link} type="button">
        Change email
      </button>
      <button className={btn_link} type="button">
        Change password
      </button>
      <button className={btn_link} type="button">
        Delete account
      </button>
    </div>
  );
};

export default UserProfile;
