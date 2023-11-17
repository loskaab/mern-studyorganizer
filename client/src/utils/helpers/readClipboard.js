import { toast } from 'react-toastify';

export const readClipboard = async () => {
  if (!navigator.clipboard) {
    toast.error('Clipboard API is unavailable');
    return;
  }
  // Clipboard API is available
  navigator.permissions.query({ name: 'clipboard-read' }).then(res => {
    if (res.state !== 'granted') {
      toast.error('Browser settings > Security > Site settings > Permissions');
    }
  });

  try {
    const clipboardText = await navigator.clipboard.readText();
    // toast.success(`Read: ${clipboardText}`);
    return clipboardText;
  } catch (err) {
    toast.error(err.message);
  }
};
