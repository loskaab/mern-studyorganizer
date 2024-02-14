import PropTypes from 'prop-types';
import { useEffect, Fragment } from 'react';

import { useGdrive } from 'utils/hooks';

const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_API_KEY } = import.meta.env;

const DISC_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

const GdriveList = ({ setTokenClient }) => {
  const { files } = useGdrive();
  // const [gapiInited, setGapiInited] = useState(false);
  // const [gisInited, setGisInited] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = gapiLoaded;
    script.async = true;
    script.defer = true;
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
      discoveryDocs: [DISC_DOC],
    });
    // setGapiInited(true);
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = gisLoaded;
    script.async = true;
    script.defer = true;
    document.querySelector('body')?.appendChild(script);

    // Callback after Google Identity Services are loaded.
    function gisLoaded() {
      const token = window.google.accounts.oauth2.initTokenClient({
        client_id: VITE_GOOGLE_CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
      });
      setTokenClient(token);
      // setGisInited(true);
    }
  }, [setTokenClient]);

  let folders = files.filter(el => el.mimeType.includes('folder'));

  folders = folders.map(el => {
    const parent = el.parents && folders.find(({ id }) => el.parents[0] === id);
    const name = parent?.shared ? `${parent.name} / ${el.name}` : el.name;

    return { ...el, name };
  });

  return (
    <ol>
      {folders.map(folder => {
        const fileList = files
          .filter(
            el =>
              !el.mimeType.includes('folder') &&
              el.parents &&
              el.parents[0] === folder.id,
          )
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(el => {
            return <li key={el.id}>{el.name}</li>;
          });

        if (fileList.length > 0) {
          return (
            <Fragment key={folder.id}>
              <li>{folder.name}</li>
              <ul style={{ listStyle: 'none' }}>{fileList}</ul>
            </Fragment>
          );
        }
      })}
    </ol>
  );
};

export default GdriveList;

GdriveList.propTypes = {
  setTokenClient: PropTypes.func,
};
