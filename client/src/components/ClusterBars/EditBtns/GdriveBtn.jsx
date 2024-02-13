import { useEffect, useState } from 'react';

import Button from 'components/shared/Button/Button';

import { themes } from 'styles/themes';

const { button } = themes.shadows;

const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_API_KEY } = import.meta.env;
const { VITE_DISCOVERY_DOC, VITE_SCOPES } = import.meta.env;

const GdriveBtn = () => {
  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);
  const [tokenClient, setTokenClient] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = gapiLoaded;
    script.async = true;
    script.defer = true;
    script.id = 'google-client-script';
    document.querySelector('body')?.appendChild(script);

    // Callback after api.js is loaded.
    function gapiLoaded() {
      window.gapi.load('client', initializeGapiClient);
    }
  }, []);

  // Callback after the API client is loaded. Loads the discovery doc to initialize the API.
  async function initializeGapiClient() {
    await window.gapi.client.init({
      apiKey: VITE_GOOGLE_API_KEY,
      discoveryDocs: [VITE_DISCOVERY_DOC],
    });
    setGapiInited(true);
    // maybeEnableButtons();
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = gisLoaded;
    script.async = true;
    script.defer = true;
    script.id = 'google-client-script';
    document.querySelector('body')?.appendChild(script);

    // Callback after Google Identity Services are loaded.
    function gisLoaded() {
      const token = window.google.accounts.oauth2.initTokenClient({
        client_id: VITE_GOOGLE_CLIENT_ID,
        scope: VITE_SCOPES,
        callback: '', // defined later
      });
      setTokenClient(token);
      setGisInited(true);
      // maybeEnableButtons();
    }
  }, [gapiInited, gisInited]);

  // function maybeEnableButtons() {
  //   if (gapiInited && gisInited) {
  //     document.getElementById('authorize_button').style.visibility = 'visible';
  //   }
  // }

  //  Sign in the user upon button click.
  function signIn() {
    console.log(tokenClient);
    tokenClient.callback = async resp => {
      if (resp.error !== undefined) {
        throw resp;
      }
      document.getElementById('signout_button').style.visibility = 'visible';
      document.getElementById('authorize_button').innerText = 'Refresh';
      await listFiles();
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

  // Print metadata for first 10 files.
  const listFiles = async () => {
    let response;
    try {
      response = await window.gapi.client.drive.files.list({
        pageSize: 30,
        fields: 'files(id, name)',
      });
    } catch (err) {
      // document.getElementById('content').innerText = err.message;
      console.log(err.message);
      return;
    }
    const files = response.result.files;
    if (!files || files.length == 0) {
      // document.getElementById('content').innerText = 'No files found.';
      console.log('No files found.');
      return;
    }
    // Flatten to string to display
    const output = files.reduce(
      (str, file) => `${str}${file.name} (${file.id})\n`,
      'Files:\n',
    );
    console.log('output: ', output);
    // document.getElementById('content').innerText = output;
  };
  return (
    <>
      <Button id="authorize_button" onClick={signIn} $s="m" $bs={button}>
        SignIn
      </Button>
      <Button id="signout_button" onClick={signOut} $s="m" $bs={button}>
        SignOut
      </Button>
      <Button onClick={listFiles} $s="m" $bs={button}>
        G-Drive
      </Button>
    </>
  );
};

export default GdriveBtn;
