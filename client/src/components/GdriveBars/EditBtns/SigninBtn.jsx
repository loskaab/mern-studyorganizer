import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from 'components/shared/Button/Button';
import { themes } from 'styles/themes';
import { listFilesThunk } from 'store/gdrive/gdriveThunks';

const { button } = themes.shadows;

const SigninBtn = ({ token }) => {
  const dispatch = useDispatch();

  const signIn = e => {
    token.callback = resp => {
      if (resp.error !== undefined) {
        throw resp;
      }
      dispatch(listFilesThunk());
    };

    if (window.gapi.client.getToken() === null) {
      // Prompt the user to select a Google Account and ask for consent to share their data
      // when establishing a new session.
      token.requestAccessToken({ prompt: 'consent' });
    } else {
      // Skip display of account chooser and consent dialog for an existing session.
      token.requestAccessToken({ prompt: '' });
    }

    e.currentTarget.blur();
  };

  return (
    <Button onClick={signIn} $s="m" $bs={button}>
      Sign In
    </Button>
  );
};

export default SigninBtn;

SigninBtn.propTypes = {
  token: PropTypes.object.isRequired,
};
