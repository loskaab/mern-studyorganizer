import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Select from 'components/shared/Select/Select';
import { languageCode } from 'utils/constants';
import { useAuth, useClusters, useElements } from 'utils/hooks';
import { updateUserThunk } from 'store/auth/authThunks';
import { fetchElementsThunk } from 'store/element/elementThunks';
import { updateClusterThunk } from 'store/cluster/clusterThunks';
import { setActiveCluster } from 'store/cluster/clusterSlice';
import { themes } from 'styles/themes';

import LiElement from './Li/Li';
import { SelectWrap, List } from './ElementList.styled';

const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;

const ElementList = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();
  const { allElements } = useElements();

  useEffect(() => {
    dispatch(fetchElementsThunk());
  }, [dispatch]);

  const activeClusterElements = allElements
    .filter(el => el.cluster === activeCluster.title)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  const { _id, lang } = activeCluster;
  const setClusterLang = ({ value }) => {
    dispatch(updateClusterThunk({ _id, lang: value }))
      .unwrap()
      .then(pld => dispatch(setActiveCluster(pld.result.cluster)));
  };

  const setUserLang = ({ value }) => {
    const formData = new FormData();
    formData.append('lang', value);
    dispatch(updateUserThunk(formData));
  };

  return (
    <List>
      <SelectWrap>
        <Select
          options={languageCode}
          defaultValue={languageCode.find(el => el.value === lang)}
          onChange={setClusterLang}
          $ol={ol}
          $b={b}
          $bh={bh}
          $br={themes.radiuses.xl}
        />
        <Select
          options={languageCode}
          defaultValue={languageCode.find(el => el.value === user.lang)}
          onChange={setUserLang}
          $ol={ol}
          $b={b}
          $bh={bh}
          $br={themes.radiuses.xl}
        />
      </SelectWrap>

      {activeClusterElements.map(el => (
        <LiElement key={el._id} el={el} />
      ))}
    </List>
  );
};

export default ElementList;
