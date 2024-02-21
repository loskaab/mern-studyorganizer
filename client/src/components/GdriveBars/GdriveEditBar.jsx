import GridWrap from 'components/shared/GridWrap/GridWrap';
import GoogleAuth from 'servises/google/authApi';
import { useGdrive } from 'utils/hooks';
import { themes } from 'styles/themes';

import DeleteBtn from './EditBtns/DeleteBtn';
import RefreshBtn from './RefreshBtn/RefreshBtn';

// import AddBtn from './EditBtns/AddBtn';

const { s, m } = themes.indents;

const GdriveEditBar = () => {
  const { gdriveTrash } = useGdrive();

  const isDeleteBtn = gdriveTrash.length > 0;

  return (
    <GridWrap
      $m={`${s} ${m}`}
      $pos="fixed"
      $side="right"
      $high="bottom"
      $gtc="auto 1fr"
    >
      {isDeleteBtn && <DeleteBtn />}
      <GoogleAuth signInBtn>
        <RefreshBtn />
      </GoogleAuth>
    </GridWrap>
  );
};

export default GdriveEditBar;
