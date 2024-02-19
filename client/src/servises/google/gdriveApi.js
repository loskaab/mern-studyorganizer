// auth
export const signIn = (tokenClient, callback) => {
  tokenClient.callback = resp => {
    if (resp.error !== undefined) {
      throw resp;
    }
    callback();
  };

  const accessToken = window.gapi.client.getToken();
  if (accessToken === null) {
    tokenClient.requestAccessToken({ prompt: 'consent' });
  } else {
    callback();
  }
};

// files
export const listFiles = async () => {
  const { result } = await window.gapi.client.drive.files.list({
    pageSize: 1000,
    orderBy: 'folder', // name, folder, recency, modifiedTime,
    fields:
      'files(id, name, parents, mimeType, fullFileExtension, webViewLink, webContentLink, createdTime, shared, starred, trashed)',
    // q: 'shared = true',
  });
  return result;
};
