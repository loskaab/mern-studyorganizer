import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { getMediaLink, speakText, writeClipboard } from 'utils/helpers';
import { useClusters } from 'utils/hooks';

import { GridWrap, Divider, SpeakBtn, Iframe, Audio } from './Element.styled';

const Element = ({ el, sortByDate, setSortByDate }) => {
  const { activeCluster } = useClusters();
  const { element, caption } = el;

  const speakElement = async () => {
    const msg = speakText({
      text: element,
      lang: activeCluster.lang,
      rate: activeCluster.rate,
    });
    await writeClipboard(element);
    msg && toast.error(msg);
  };

  const speakCaption = () => {
    const msg = speakText({ text: caption, lang: el.lang, rate: el.rate });
    msg && toast.error(msg);
  };

  const handleSort = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
    setSortByDate(!sortByDate);
    sortByDate
      ? toast.success('Ascending by Date')
      : toast.success('Descending by Date');
  };

  const isAudio = caption.endsWith('mp3');
  const isIframe = !isAudio && caption.startsWith('http');
  const isBtn = !isAudio && !isIframe;

  return (
    <GridWrap>
      <SpeakBtn onClick={speakElement}>{element}</SpeakBtn>

      <Divider onClick={handleSort} />

      {isAudio && <Audio controls src={getMediaLink(caption)} />}
      {isIframe && <Iframe src={getMediaLink(caption)} />}
      {isBtn && <SpeakBtn onClick={speakCaption}>{caption}</SpeakBtn>}
    </GridWrap>
  );
};

export default Element;

Element.propTypes = {
  el: PropTypes.object,
  sortByDate: PropTypes.bool,
  setSortByDate: PropTypes.func,
  $active: PropTypes.bool,
  $hovered: PropTypes.bool,
};
