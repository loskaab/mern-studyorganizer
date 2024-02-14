// Print metadata for first 30 files.
export const listFiles = async () => {
  let response;
  try {
    response = await window.gapi.client.drive.files.list({
      pageSize: 1000,
      orderBy: 'folder', // name, folder, recency, modifiedTime,
      fields:
        'files(id, name, parents, mimeType, fullFileExtension, webViewLink, webContentLink, shared, starred, trashed)',
      // q: 'starred',
    });
  } catch (err) {
    return err.message;
  }
  const files = response.result.files;
  if (!files || files.length == 0) {
    return 'No files found.';
  }
  return files;
};
