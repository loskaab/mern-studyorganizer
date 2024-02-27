import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useClusters, useElements } from 'utils/hooks';
import { fetchElementsThunk } from 'store/element/elementThunks';

import ElementLangBar from 'components/ElementBars/ElementLangBar';

import LiElement from './Li/LiElement';
import { List } from './ElementList.styled';

const ElementList = () => {
  const dispatch = useDispatch();
  const { activeCluster } = useClusters();
  const { allElements, elementTrash, elementFilter } = useElements();

  let { elementSelect } = useElements();
  elementSelect = !elementSelect ? [] : elementSelect;

  const [sortByDate, setSortByDate] = useState(false);

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
    .sort(
      sortByDate
        ? (a, b) => b.createdAt.localeCompare(a.createdAt)
        : (a, b) => a.createdAt.localeCompare(b.createdAt),
    );

  return (
    <List>
      {filtredElements.map(element => (
        <LiElement
          key={element._id}
          el={element}
          sortByDate={sortByDate}
          setSortByDate={setSortByDate}
        />
      ))}

      <ElementLangBar />
    </List>
  );
};

export default ElementList;
