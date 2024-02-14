import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { listFiles } from 'servises/googleDrive/filesApi';
import Button from 'components/shared/Button/Button';
import { themes } from 'styles/themes';
import { setFiles } from 'store/gdrive/gdriveSlice';

const { button } = themes.shadows;

const SigninBtn = ({ tokenClient }) => {
  const dispatch = useDispatch();

  //  Sign in the user upon button click.
  function signIn() {
    tokenClient.callback = async resp => {
      if (resp.error !== undefined) {
        throw resp;
      }
      // document.getElementById('signout_button').style.visibility = 'visible';
      // document.getElementById('authorize_button').innerText = 'Refresh';
      const files = await listFiles();
      dispatch(setFiles(files));
    };

    if (window.gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      tokenClient.requestAccessToken({ prompt: '' });
    }
  }
  return (
    <Button id="authorize_button" onClick={signIn} $s="m" $bs={button}>
      Sign In
    </Button>
  );
};

export default SigninBtn;

SigninBtn.propTypes = {
  tokenClient: PropTypes.object.isRequired,
};
