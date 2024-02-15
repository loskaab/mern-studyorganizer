import PropTypes from 'prop-types';
import { useState } from 'react';

import AddClusterForm from 'components/ClusterForms/ClusterAddForm';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import Modal from 'components/shared/Modal/Modal';
import { themes } from 'styles/themes';

import SigninBtn from './EditBtns/SigninBtn';
import AddBtn from './EditBtns/AddBtn';
// import DeleteBtn from './EditBtns/DeleteBtn';

const { s, m } = themes.indents;

const GdriveEditBar = ({ token }) => {
  const [isModal, setIsModal] = useState(false);
  const [clipboardText, setClipboardText] = useState('');
  const [group, setGroup] = useState('');

  return (
    <>
      <GridWrap
        $m={`${s} ${m}`}
        $pos="fixed"
        $side="right"
        $high="bottom"
        $gtc="1fr 1fr"
      >
        {/* {isTrashBtn ? <DeleteBtn /> : <span></span>} */}
        <AddBtn setClipboardText={setClipboardText} setIsModal={setIsModal} />
        <SigninBtn token={token} />
      </GridWrap>

      {isModal && (
        <Modal onClick={() => setIsModal(false)}>
          <AddClusterForm
            cluster={clipboardText}
            group={group}
            setGroup={setGroup}
            setIsModal={setIsModal}
          />
        </Modal>
      )}
    </>
  );
};

export default GdriveEditBar;

GdriveEditBar.propTypes = {
  token: PropTypes.object.isRequired,
};
