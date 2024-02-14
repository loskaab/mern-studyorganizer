import Button from 'components/shared/Button/Button';
import { themes } from 'styles/themes';

const { button } = themes.shadows;

const SignoutBtn = () => {
  // Sign out the user upon button click.
  function signOut() {
    const token = window.gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken('');
      document.getElementById('content').innerText = '';
      document.getElementById('authorize_button').innerText = 'Authorize';
      document.getElementById('signout_button').style.visibility = 'hidden';
    }
  }

  return (
    <Button id="signout_button" onClick={signOut} $s="m" $bs={button}>
      Sign Out
    </Button>
  );
};

export default SignoutBtn;
