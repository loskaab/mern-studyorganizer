import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FaCheck } from 'react-icons/fa';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { SiGoogledrive } from 'react-icons/si';

import AddClusterForm from 'components/ClusterForms/ClusterAddForm';
import Modal from 'components/shared/Modal/Modal';
import { getDate } from 'utils/helpers';
import { useClusters, useGdrive } from 'utils/hooks';
import {
  setActiveFile,
  setGdriveCheck,
  setGdriveTrash,
} from 'store/gdrive/gdriveSlice';

import {
  LiFile as Li,
  FileName,
  FileLink,
  LabelFavorite,
  LabelChecked,
  EditBtn,
  TrashBtn,
  DateBtn,
} from './Li.styled';

const LiFile = ({ el, group, setGroup, sortByDate, setSortByDate }) => {
  const dispatch = useDispatch();
  const { allClusters } = useClusters();
  const { activeFile, gdriveCheck, gdriveTrash } = useGdrive();
  const [isModal, setIsModal] = useState(false);

  const { id, name, webViewLink, fullFileExtension, createdTime } = el;

  const trim = link => {
    const text = link.replace('https://drive.google.com/', '');
    return text.length <= 30 ? text : text.substring(0, 19).concat('...');
  };

  const handleFavoriteClick = () => {
    setIsModal(true);
  };

  const handleLinkClick = () => {
    dispatch(setActiveFile(el));
  };

  const isInClusters = allClusters.some(el => el.gdriveId === id);

  const handleChecked = () => dispatch(setGdriveCheck(el));
  const isInChecked = gdriveCheck.find(el => el.id === id);

  const handleTrash = () => dispatch(setGdriveTrash(el));
  const isInTrash = gdriveTrash.find(el => el.id === id);

  const handleSort = () => {
    setSortByDate(!sortByDate);
    sortByDate
      ? toast.success('Ascending by Title')
      : toast.success('Ascending by Date');
  };

  const active = id === activeFile?.id;

  return (
    <Li id={active ? 'active-file' : null} $active={active}>
      <LabelFavorite onClick={handleFavoriteClick} $hovered={isInClusters}>
        <SiGoogledrive size={isInClusters ? '16px' : '15px'} />
      </LabelFavorite>

      <FileName onClick={handleLinkClick}>{name}</FileName>

      <FileLink href={webViewLink} target="_blank" rel="noopener noreferrer">
        {trim(webViewLink)}
      </FileLink>

      <EditBtn
      // onClick={() => setIsModal('edit')}
      >
        <FiEdit3 size="15px" />
      </EditBtn>

      <TrashBtn $hovered={isInTrash} onClick={handleTrash}>
        <FiTrash2 size="16px" />
      </TrashBtn>

      <LabelChecked $hovered={isInChecked}>
        <input
          type="checkbox"
          name="checked"
          checked={isInChecked}
          onChange={handleChecked}
        />
        <FaCheck size="15px" />
      </LabelChecked>

      <DateBtn onClick={handleSort}>{getDate(createdTime)}</DateBtn>

      {isModal && (
        <Modal onClick={() => setIsModal(false)}>
          <AddClusterForm
            cluster={webViewLink}
            title={name.replace(`.${fullFileExtension}`, '')}
            group={group}
            setGroup={setGroup}
            setIsModal={setIsModal}
          />
        </Modal>
      )}
    </Li>
  );
};

export default LiFile;

LiFile.propTypes = {
  el: PropTypes.object,
  group: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setGroup: PropTypes.func,
  sortByDate: PropTypes.bool,
  setSortByDate: PropTypes.func,
  $active: PropTypes.bool,
  $hovered: PropTypes.bool,
};
