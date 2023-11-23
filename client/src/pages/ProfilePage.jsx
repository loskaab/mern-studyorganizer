// import Button from 'components/shared/Button/Button';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';

import { themes } from 'styles/themes';
// import ProfileForm from 'components/Forms/ProfileForm';

const ProfilePage = () => {
  const { s, m } = themes.indents;

  return (
    <FlexWrap $p={`${s} ${m}`} $fd="column" $ai="center" $jc="center">
      <h1>Profile</h1>
      {/* <ProfileForm /> */}
    </FlexWrap>
  );
};

export default ProfilePage;
