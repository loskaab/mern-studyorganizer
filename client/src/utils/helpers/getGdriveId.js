export const getGdiveId = link => {
  let gdriveId = link
    .replace('https://drive.google.com/', '')
    .replace('file/d/', '');

  const index = gdriveId.indexOf('/');
  gdriveId = gdriveId.substring(0, index);

  return gdriveId;
};
