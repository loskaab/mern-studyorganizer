import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Select from 'components/shared/Select/Select';
import Button from 'components/shared/Button/Button';

import { useAuth, useClusters } from 'utils/hooks';
import { updateUserThunk } from 'store/auth/authThunks';
import { updateClusterThunk } from 'store/cluster/clusterThunks';
import { setActiveCluster } from 'store/cluster/clusterSlice';
import { languageCodes, rateValues } from 'utils/constants';
import { speakText, speakTranslatiot } from 'utils/helpers';
import { themes } from 'styles/themes';

const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;
const { button } = themes.shadows;

const ElementLangBar = ({ filtredElements }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster: ac } = useClusters();

  const setClusterLang = ({ value }) => {
    dispatch(updateClusterThunk({ _id: ac._id, lang: value }))
      .unwrap()
      .then(pld => dispatch(setActiveCluster(pld.result.cluster)));
  };

  const setClusterRate = ({ value }) => {
    dispatch(updateClusterThunk({ _id: ac._id, rate: value }))
      .unwrap()
      .then(pld => dispatch(setActiveCluster(pld.result.cluster)));
  };

  const setUserLang = ({ value }) => {
    const formData = new FormData();
    formData.append('lang', value);
    dispatch(updateUserThunk(formData));
  };

  const setUserRate = ({ value }) => {
    const formData = new FormData();
    formData.append('rate', value);
    dispatch(updateUserThunk(formData));
  };

  const playFiltred = e => {
    let textString = '';
    const divider = '$*@';
    for (let i = 0; i < filtredElements.length; i += 1) {
      const { element } = filtredElements[i];
      textString += element + divider;
    }

    const msg = speakText({
      divider,
      text: textString,
      lang: ac.lang,
      rate: ac.rate,
    });

    e.target.blur();
    msg && toast.error(msg);
  };

  const playTranslated = e => {
    let textString = '';
    const divider = '$*@';
    for (let i = 0; i < filtredElements.length; i += 1) {
      const { element, caption, lang } = filtredElements[i];
      textString += element + `@±@${lang}` + caption + divider;
    }

    const msg = speakTranslatiot({
      divider,
      text: textString,
      lang: ac.lang,
      rate: ac.rate,
    });

    e.target.blur();
    msg && toast.error(msg);
  };

  return (
    <GridWrap $m="0" $cg="8px" $ai="center" $gtc="2fr 2fr 1fr 1fr 2fr 2fr">
      <Select
        options={languageCodes}
        defaultValue={languageCodes.find(el => el.value === ac?.lang)}
        onChange={setClusterLang}
        placeholder="Language..."
        $ol={ol}
        $b={b}
        $bh={bh}
      />
      <Select
        options={rateValues}
        defaultValue={rateValues.find(el => el.value == ac?.rate)}
        onChange={setClusterRate}
        placeholder="Rate..."
        $ol={ol}
        $b={b}
        $bh={bh}
      />

      <Button onClick={playFiltred} $s="m" $bs={button}>
        play
      </Button>

      <Button onClick={playTranslated} $s="m" $bs={button}>
        all
      </Button>

      <Select
        options={languageCodes}
        defaultValue={languageCodes.find(el => el.value === user.lang)}
        onChange={setUserLang}
        $ol={ol}
        $b={b}
        $bh={bh}
      />
      <Select
        options={rateValues}
        defaultValue={rateValues.find(el => el.value == user.rate)}
        onChange={setUserRate}
        $ol={ol}
        $b={b}
        $bh={bh}
      />
    </GridWrap>
  );
};

export default ElementLangBar;

ElementLangBar.propTypes = {
  filtredElements: PropTypes.object,
};
