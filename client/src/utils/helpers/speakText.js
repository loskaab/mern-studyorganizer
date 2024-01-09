export const speakText = ({ text, lang, rate = 1 }) => {
  const speech = window.speechSynthesis;
  const voices = speech.getVoices().filter(el => el.lang.includes(lang));

  const readme = new SpeechSynthesisUtterance(text);
  readme.voice = voices[0];
  readme.rate = rate;

  if (voices[0]) {
    speech.speaking ? speech.cancel() : speech.speak(readme);
  } else {
    return `No ${lang.toUpperCase()} voice available`;
  }
};
