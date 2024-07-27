import { useClusters, useElements } from 'utils/hooks';

import GridWrap from 'components/shared/GridWrap/GridWrap';

import AddBtn from './EditBtns/AddBtn';
import DeleteBtn from './EditBtns/DeleteBtn';

const ElementEditBar = () => {
  const { elementTrash } = useElements();
  const { activeCluster } = useClusters();

  const isDeleteBtn = elementTrash.length > 0 ? ' 1fr' : '';
  const isAddBtn = activeCluster ? ' 1fr' : '';
  const gtc = isDeleteBtn + isAddBtn;

  return (
    <GridWrap
      $m="15px 25px"
      $pos="absolute"
      $side="left"
      $high="bottom"
      $gtc={gtc}
    >
      {isAddBtn && <AddBtn />}
      {isDeleteBtn && <DeleteBtn />}
    </GridWrap>
  );
};

export default ElementEditBar;
