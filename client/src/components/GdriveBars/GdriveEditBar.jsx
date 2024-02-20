import GridWrap from 'components/shared/GridWrap/GridWrap';
import GoogleAuth from 'servises/google/authApi';

import { themes } from 'styles/themes';

// import AddBtn from './EditBtns/AddBtn';

const { s, m } = themes.indents;

const GdriveEditBar = () => {
  return (
    <GridWrap
      $m={`${s} ${m}`}
      $pos="fixed"
      $side="right"
      $high="bottom"
      $gtc="auto"
    >
      {/* <AddBtn /> */}
      <GoogleAuth signInBtn />
    </GridWrap>
  );
};

export default GdriveEditBar;
