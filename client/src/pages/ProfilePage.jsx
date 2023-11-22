import Button from 'components/shared/Button/Button';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import ControlBar from 'components/shared/ControlBar/ControlBar';
import { themes } from 'styles/themes';
// import ProfileForm from 'components/Forms/ProfileForm';

const ProfilePage = () => {
  const { s, m } = themes.indents;

  return (
    <FlexWrap $p={`${s} ${m}`} $fd="column" $ai="center" $jc="center">
      <h1>Profile</h1>
      {/* <ProfileForm /> */}
      <ControlBar $side="right" $high="bottom" $gtc="1fr 1fr">
        <Button $s="m">Delete</Button>
        <Button $s="m">Edit</Button>
      </ControlBar>
    </FlexWrap>
  );
};

export default ProfilePage;
