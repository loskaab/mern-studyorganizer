// import AddClusterForm from 'components/ClusterForms/ClusterAddForm';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import GoogleAuth from 'servises/google/authApi';

// import Modal from 'components/shared/Modal/Modal';
import { themes } from 'styles/themes';

// import ListBtn from './EditBtns/ListBtn';
// import AddBtn from './EditBtns/AddBtn';
// import DeleteBtn from './EditBtns/DeleteBtn';

const { s, m } = themes.indents;

const GdriveEditBar = () => {
  // const [isModal, setIsModal] = useState(false);

  return (
    <>
      <GridWrap
        $m={`${s} ${m}`}
        $pos="fixed"
        $side="right"
        $high="bottom"
        $gtc="1fr"
      >
        <GoogleAuth signInBtn />
      </GridWrap>

      {/* {isModal && (
        <Modal onClick={() => setIsModal(false)}>
          <AddClusterForm
            cluster={clipboardText}
            setIsModal={setIsModal}
          />
        </Modal>
      )} */}
    </>
  );
};

export default GdriveEditBar;
