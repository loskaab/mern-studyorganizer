import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import { loadGapiInsideDOM, loadAuth2 } from 'gapi-script';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Button from 'components/shared/Button/Button';
import { listFilesThunk } from 'store/gdrive/gdriveThunks';
import { themes } from 'styles/themes';

const { button } = themes.shadows;

const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_API_KEY } = import.meta.env;
const DISCOVERY_DOC =
  'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
const SCOPES = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.appdata',
  'https://www.googleapis.com/auth/drive.file',
].join(' ');

const GoogleAuth = ({ signInBtn, signOutBtn, children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [gapi, setGapi] = useState(null);

  const attachSignin = useCallback((element, auth2) => {
    auth2.attachClickHandler(
      element,
      {},
      googleUser => updateUser(googleUser),
      err => toast.error(err.message),
    );
  }, []);

  const updateUser = currentUser => {
    const name = currentUser.getBasicProfile().getName();
    const email = currentUser.getBasicProfile().getEmail();
    const image = currentUser.getBasicProfile().getImageUrl();
    setUser({ name, email, image });
  };

  // load gapi
  useEffect(() => {
    const loadGapi = async () => {
      const newGapi = await loadGapiInsideDOM();
      setGapi(newGapi);
    };
    loadGapi();
  }, []);

  // load auth2
  useEffect(() => {
    if (!gapi) return;

    if (!user) {
      const setAuth2 = async () => {
        const auth2 = await loadAuth2(gapi, VITE_GOOGLE_CLIENT_ID, SCOPES);
        attachSignin(document.getElementById('customBtn'), auth2);
      };
      setAuth2();
    }
  }, [user, gapi, attachSignin]);

  // keep user on Login button
  useEffect(() => {
    if (!gapi) return;

    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, VITE_GOOGLE_CLIENT_ID, SCOPES);
      if (auth2.isSignedIn.get()) {
        updateUser(auth2.currentUser.get());
      } else {
        attachSignin(document.getElementById('customBtn'), auth2);
      }
    };
    setAuth2();
  }, [attachSignin, gapi]);

  // initialize G-Drive client
  useEffect(() => {
    if (!gapi) return;

    function gapiLoaded() {
      window.gapi.load('client', initializeGapiClient);
    }
    async function initializeGapiClient() {
      await window.gapi.client.init({
        apiKey: VITE_GOOGLE_API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      });
    }
    gapiLoaded();
  }, [dispatch, gapi]);

  // list G-Drive files
  useEffect(() => {
    dispatch(listFilesThunk());
  }, [user, dispatch]);

  const signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setUser(null);
      toast.success('User signed out');
    });
  };

  return (
    <>
      {signInBtn && (
        <Button onClick={e => e.currentTarget.blur()} $s="m" $bs={button}>
          <span id="customBtn">
            {user ? user.email.replace('@gmail.com', '') : 'Sign In'}
          </span>
          {children}
        </Button>
      )}

      {signOutBtn && (
        <Button onClick={signOut} $s="m" $bs={button}>
          Sign Out
        </Button>
      )}
    </>
  );
};

export default GoogleAuth;

GoogleAuth.propTypes = {
  signInBtn: PropTypes.bool.isRequired,
  signOutBtn: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
