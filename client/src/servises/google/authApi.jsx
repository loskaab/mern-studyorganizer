import { useEffect } from 'react';

const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_API_KEY } = import.meta.env;
const DISC_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

const GdriveAuth = ({ setTokenClient }) => {
  useEffect(() => {
    const gapi = document.getElementById('gapi');
    if (gapi) return;

    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.id = 'gapi';
    script.async = true;
    script.defer = true;
    script.onload = gapiLoaded;
    document.querySelector('body')?.appendChild(script);
    // Callback after api.js is loaded.
    function gapiLoaded() {
      window.gapi.load('client', initializeGapiClient);
    }
    // Callback after the API client is loaded. Loads the discovery doc to initialize the API.
    async function initializeGapiClient() {
      await window.gapi.client.init({
        apiKey: VITE_GOOGLE_API_KEY,
        discoveryDocs: [DISC_DOC],
      });
    }
  }, []);

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
  }, [setTokenClient]);
};

export default GdriveAuth;
