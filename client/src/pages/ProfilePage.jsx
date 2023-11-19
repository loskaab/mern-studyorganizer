import Button from 'components/shared/Button/Button';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import ControlBar from 'components/shared/ControlBar/ControlBar';
import { themes } from 'styles/themes';
// import ProfileForm from 'components/Forms/ProfileForm';

const ProfilePage = () => {
  return (
    <FlexWrap
      $p={`${themes.indent.s} ${themes.indent.m}`}
      $fd="column"
      $ai="center"
      $jc="center"
    >
      <h1>Profile</h1>
      {/* <ProfileForm /> */}
      <ControlBar $x="right" $y="bottom" $gtc="1fr 1fr">
        <Button $s="m">Edit</Button>
        <Button $s="m">Delete</Button>
      </ControlBar>
    </FlexWrap>
  );
};

export default ProfilePage;
