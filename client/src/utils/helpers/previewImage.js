export const previewImage = files => {
  if (!files || !files[0]) return;

  const imageUrl = URL.createObjectURL(files[0]);
  const avatarEl = document.querySelector('#avatar');

  avatarEl.style.backgroundImage = `url(${imageUrl})`;
  avatarEl.style.backgroundSize = 'cover';
  avatarEl.style.backgroundPosition = 'center';
};
