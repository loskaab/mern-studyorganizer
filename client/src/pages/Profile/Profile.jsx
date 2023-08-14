import ProfileForm from 'components/Forms/ProfileForm';

import css from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={css.profile}>
      <h1>Profile</h1>
      <ProfileForm />
    </div>
  );
};

export default Profile;
