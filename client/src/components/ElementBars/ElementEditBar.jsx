import { useElements } from 'utils/hooks';

import GridWrap from 'components/shared/GridWrap/GridWrap';

import AddBtn from './EditBtns/AddBtn';
import DeleteBtn from './EditBtns/DeleteBtn';

const ElementEditBar = () => {
  const { elementTrash } = useElements();

  return (
    <GridWrap
      $m="15px 15px"
      $pos="absolute"
      $side="right"
      $high="bottom"
      $gtc="1fr 1fr"
    >
      {elementTrash.length > 0 ? <DeleteBtn /> : <span></span>}
      <AddBtn />
    </GridWrap>
  );
};

export default ElementEditBar;
