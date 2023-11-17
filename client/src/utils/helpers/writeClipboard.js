import { toast } from 'react-toastify';

export const writeClipboard = async text => {
  if (!navigator.clipboard) {
    toast.error('Clipboard API is unavailable');
    return;
  }
  // Clipboard API is available
  navigator.permissions.query({ name: 'clipboard-write' }).then(res => {
    if (res.state !== 'granted') {
      toast.error('Browser settings > Security > Site settings > Permissions');
    }
  });

  if (text) {
    navigator.clipboard
      .writeText(text)
      // .then(() => toast.success(`Copied: ${text}`))
      .catch(err => toast.error(err.message));
  }
};
