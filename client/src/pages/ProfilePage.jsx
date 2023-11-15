import Button from 'components/shared/Button/Button';
import Container from 'components/shared/Container/Container';
import ControlBar from 'components/shared/ControlBar/ControlBar';
import { themes } from 'styles/themes';
// import ProfileForm from 'components/Forms/ProfileForm';

const ProfilePage = () => {
  return (
    <Container
      $p={`${themes.indent.s} ${themes.indent.m}`}
      $d="flex"
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
    </Container>
  );
};

export default ProfilePage;
