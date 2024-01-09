import { useDispatch } from 'react-redux';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Select from 'components/shared/Select/Select';

import { useAuth, useClusters } from 'utils/hooks';
import { updateUserThunk } from 'store/auth/authThunks';
import { updateClusterThunk } from 'store/cluster/clusterThunks';
import { setActiveCluster } from 'store/cluster/clusterSlice';
import { languageCodes, rateValues } from 'utils/constants';
import { themes } from 'styles/themes';
// const { s } = themes.indents;
const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;

const ElementLangBar = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();

  const { _id, lang, rate } = activeCluster;

  const setClusterLang = ({ value }) => {
    dispatch(updateClusterThunk({ _id, lang: value }))
      .unwrap()
      .then(pld => dispatch(setActiveCluster(pld.result.cluster)));
  };

  const setClusterRate = ({ value }) => {
    dispatch(updateClusterThunk({ _id, rate: value }))
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

  return (
    <GridWrap $m="0" $cg="8px" $ai="center" $gtc="1fr 1fr 1fr 1fr">
      <Select
        options={languageCodes}
        defaultValue={languageCodes.find(el => el.value === lang)}
        onChange={setClusterLang}
        $ol={ol}
        $b={b}
        $bh={bh} // $br={themes.radiuses.xl}
      />
      <Select
        options={rateValues}
        defaultValue={rateValues.find(el => el.value == rate)}
        onChange={setClusterRate}
        $ol={ol}
        $b={b}
        $bh={bh}
      />

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
