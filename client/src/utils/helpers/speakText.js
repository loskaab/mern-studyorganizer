import { themes } from 'styles/themes';

const { background } = themes.colors;

const markAsRead = message => {
  document.querySelectorAll('button').forEach(el => {
    if (el.innerText === message.text) {
      const activeElementEl = el.closest('li');
      activeElementEl.style.backgroundColor = background;
      const scrollOnActive = () => {
        activeElementEl?.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      };
      scrollOnActive();
    }
  });
};

export const speakText = ({ text, lang, rate = 1, divider = '$*@' }) => {
  const speech = window.speechSynthesis;
  const messageParts = text.split(divider);
  let currentIndex = 0;

  const speak = textToSpeak => {
    const message = new SpeechSynthesisUtterance();
    const voices = speech.getVoices().filter(el => el.lang.includes(lang));
    message.voice = voices[0];
    message.volume = 1; // 0 to 1
    message.rate = rate; // 0.1 to 10
    message.pitch = 0.1; // 0 to 2
    message.text = textToSpeak;

    // divide message on parts
    message.onend = () => {
      if (messageParts.length !== 1) markAsRead(message);
      currentIndex += 1;
      if (currentIndex < messageParts.length) {
        setTimeout(() => {
          speak(messageParts[currentIndex]);
        }, messageParts[currentIndex - 1].length * 120);
      }
    };
    if (!voices[0]) {
      return `No ${lang.toUpperCase()} voice available`;
    }
    speechSynthesis.speak(message);
  };

  speech.speaking ? speech.cancel() : speak(messageParts[0]);
};

export const speakTranslatiot = ({ text, lang, rate = 1, divider = '$*@' }) => {
  const speech = window.speechSynthesis;
  const messageParts = text.split(divider);
  let currentIndex = 0;
  const currentMsg = messageParts[currentIndex];
  const transLang = currentMsg.split('@±@')[1].substring(0, 2);

  const message = new SpeechSynthesisUtterance();
  const voices = speech.getVoices().filter(el => el.lang.includes(lang));
  message.voice = voices[0];
  message.rate = rate;
  message.text = currentMsg.split('@±@')[0];

  const translation = new SpeechSynthesisUtterance();
  const voicesT = speech.getVoices().filter(el => el.lang.includes(transLang));
  translation.voice = voicesT[0];
  translation.rate = rate;
  translation.text = currentMsg.split('@±@')[1].substring(2);

  // divide message on parts
  translation.onend = () => {
    markAsRead(translation);
    currentIndex += 1;
    if (currentIndex < messageParts.length) {
      const currentMsg = messageParts[currentIndex];
      const transLang = currentMsg.split('@±@')[1].substring(0, 2);
      const voicesT = speech
        .getVoices()
        .filter(el => el.lang.includes(transLang));
      translation.voice = voicesT[0];
      message.text = currentMsg.split('@±@')[0];
      translation.text = currentMsg.split('@±@')[1].substring(2);

      setTimeout(() => {
        speech.speak(message);
        speech.speak(translation);
      }, messageParts[currentIndex - 1].length * 80);
    }
  };
  if (!voices[0]) {
    return `No ${lang.toUpperCase()} voice available`;
  }

  speech.speak(message);
  speech.speak(translation);
};
