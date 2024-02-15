import Button from 'components/shared/Button/Button';
import { themes } from 'styles/themes';

const { button } = themes.shadows;

const SignoutBtn = () => {
  const signOut = () => {
    const token = window.gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken('');
    }
  };

  return (
    <Button onClick={signOut} $s="m" $bs={button}>
      Sign Out
    </Button>
  );
};

export default SignoutBtn;
