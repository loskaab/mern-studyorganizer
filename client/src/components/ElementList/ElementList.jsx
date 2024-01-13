import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useClusters, useElements } from 'utils/hooks';
import { fetchElementsThunk } from 'store/element/elementThunks';

import ElementLangBar from 'components/ElementBars/ElementLangBar';

import LiElement from './Li/Li';
import { List } from './ElementList.styled';

const ElementList = () => {
  const dispatch = useDispatch();
  const { activeCluster } = useClusters();
  const { allElements, elementTrash } = useElements();
  const { elementFilter, elementSelect } = useElements();

  useEffect(() => {
    dispatch(fetchElementsThunk());
  }, [dispatch]);

  const activeClusterElements = allElements
    .filter(el => el.cluster === activeCluster?._id)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  // element trash/filter/favorite/checked
  const getElements = () => {
    const trashId = elementTrash.map(el => el._id);

    return elementSelect.includes('trash')
      ? activeClusterElements.filter(el => trashId.includes(el._id))
      : activeClusterElements;
  };

  const filtredElements = getElements()
    .filter(({ element, caption, favorite, checked }) => {
      // filter
      const allFiltred =
        element.toLowerCase().includes(elementFilter) ||
        caption.toLowerCase().includes(elementFilter);
      // filter + favorite
      const filtredFavorite = elementSelect.includes('favorite')
        ? allFiltred && favorite === true
        : allFiltred;
      // filter + favorite + checked
      if (elementSelect.some(el => ['checked', 'unchecked'].includes(el))) {
        return elementSelect.includes('checked')
          ? filtredFavorite && checked === true
          : filtredFavorite && checked === false;
      }
      return filtredFavorite;
    })
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <List>
      {filtredElements.map(el => (
        <LiElement key={el._id} el={el} />
      ))}

      <ElementLangBar />
    </List>
  );
};

export default ElementList;
