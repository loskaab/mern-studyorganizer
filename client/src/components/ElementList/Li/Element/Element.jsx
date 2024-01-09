import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { useClusters } from 'utils/hooks';
import { speakText } from 'utils/helpers';

import { GridWrap, Divider, SpeakBtn } from './Element.styled';

const Element = ({ el }) => {
  const { activeCluster } = useClusters();
  const { element, caption } = el;

  const speakElementText = () => {
    const msg = speakText({
      text: element,
      lang: activeCluster.lang,
      rate: activeCluster.rate,
    });
    msg && toast.error(msg);
  };

  const speakCaptionText = () => {
    const msg = speakText({ text: caption, lang: el.lang });
    msg && toast.error(msg);
  };

  return (
    <GridWrap>
      <SpeakBtn onClick={speakElementText}>{element}</SpeakBtn>
      <Divider />
      <SpeakBtn onClick={speakCaptionText}>{caption}</SpeakBtn>
    </GridWrap>
  );
};

export default Element;

Element.propTypes = { el: PropTypes.object };
