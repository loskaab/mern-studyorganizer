import GridWrap from 'components/shared/GridWrap/GridWrap';
import GoogleAuth from 'servises/google/authApi';
import { useGdrive } from 'utils/hooks';
import { themes } from 'styles/themes';

import DeleteBtn from './EditBtns/DeleteBtn';
import RefreshBtn from './RefreshBtn/RefreshBtn';

const { s, m } = themes.indents;

const GdriveEditBar = () => {
  const { gdriveTrash } = useGdrive();

  const isDeleteBtn = gdriveTrash.length > 0 ? ' 1fr' : '';
  const gtc = 'auto' + isDeleteBtn;

  return (
    <GridWrap
      $m={`${s} ${m}`}
      $pos="fixed"
      $side="right"
      $high="bottom"
      $gtc={gtc}
    >
      {isDeleteBtn && <DeleteBtn />}
      <GoogleAuth signInBtn>
        <RefreshBtn />
      </GoogleAuth>
    </GridWrap>
  );
};

export default GdriveEditBar;
