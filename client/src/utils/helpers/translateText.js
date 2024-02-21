import translate from 'translate';

// Translation
translate.engine = 'google'; // "google", "yandex", "libre", "deepl"

export const translateText = async (text, { from, to }) => {
  try {
    const translation = await translate(`${text}`, { from, to });
    return translation;
  } catch (err) {
    return err.message;
  }
};
