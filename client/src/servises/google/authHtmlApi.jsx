import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/shared/Button/Button';
import { listFilesThunk } from 'store/gdrive/gdriveThunks';

const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_API_KEY } = import.meta.env;
const DISC_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

const GoogleAuth = ({ signInBtn, signOutBtn }) => {
  const dispatch = useDispatch();
  const [tokenClient, setTokenClient] = useState(null);
  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);

  // load gapi
  useEffect(() => {
    const gapi = document.getElementById('gapiEl');
    if (gapi) return;

    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.id = 'gapiEl';
    script.async = true;
    script.defer = true;
    script.onload = gapiLoaded;
    document.querySelector('body')?.appendChild(script);

    // initialize G-Drive client
    function gapiLoaded() {
      window.gapi.load('client', initializeGapiClient);
    }
    async function initializeGapiClient() {
      await window.gapi.client.init({
        apiKey: VITE_GOOGLE_API_KEY,
        discoveryDocs: [DISC_DOC],
      });
    }
    setGapiInited(true);
  }, [gapiInited]);

  // load auth2
  useEffect(() => {
    const gis = document.getElementById('gis');
    if (gis) return;

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.id = 'gisEl';
    script.async = true;
    script.defer = true;
    script.onload = gisLoaded;
    document.querySelector('body')?.appendChild(script);
    // Callback after Google Identity Services are loaded.
    function gisLoaded() {
      const tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: VITE_GOOGLE_CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
      });
      setTokenClient(tokenClient);
    }
    setGisInited(true);
  }, [gisInited, setTokenClient]);

  // sign in and list G-Drive files
  const signIn = callback => {
    if (!gapiInited && !gisInited) return;

    tokenClient.callback = resp => {
      if (resp.error !== undefined) {
        throw resp;
      }
      callback();
    };

    if (window.gapi.client.getToken() === null) {
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      callback();
    }
  };

  const signOut = () => {
    const token = window.gapi.client.getToken();
    if (token !== null) {
      window.google.accounts.oauth2.revoke(token.access_token);
      window.gapi.client.setToken('');
    }
  };

  return (
    <>
      {signInBtn && (
        <Button onClick={() => signIn(() => dispatch(listFilesThunk()))} $s="m">
          Sign In
        </Button>
      )}

      {signOutBtn && (
        <Button onClick={signOut} $s="m">
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
};
