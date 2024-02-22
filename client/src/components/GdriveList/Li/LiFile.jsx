import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { SiGoogledrive } from 'react-icons/si';
import { RiDownloadCloud2Line } from 'react-icons/ri';

import AddClusterForm from 'components/ClusterForms/ClusterAddForm';
import Modal from 'components/shared/Modal/Modal';
import { getDate } from 'utils/helpers';
import { useClusters, useGdrive } from 'utils/hooks';
import { setActiveFile, setGdriveTrash } from 'store/gdrive/gdriveSlice';

import {
  LiFile as Li,
  FileName,
  FileLink,
  LabelFavorite,
  DateBtn,
  EditBtn,
  TrashBtn,
  DownloadBtn,
} from './Li.styled';

const LiFile = ({ el, group, setGroup, sortByDate, setSortByDate }) => {
  const dispatch = useDispatch();
  const { allClusters } = useClusters();
  const { activeFile, gdriveTrash } = useGdrive();
  const [isModal, setIsModal] = useState(false);

  const { id, name, webViewLink, fullFileExtension, createdTime } = el;

  const trim = link => {
    const text = link.replace('https://drive.google.com/', '');
    return text.length <= 30 ? text : text.substring(0, 19).concat('...');
  };

  const isInClusters = allClusters.some(el => el.gdriveId === id);
  const handleFavoriteClick = () => {
    setIsModal(true);
  };

  const handleLinkClick = () => {
    dispatch(setActiveFile(el));
  };

  const handleSort = () => {
    setSortByDate(!sortByDate);
    sortByDate
      ? toast.success('Ascending by Title')
      : toast.success('Ascending by Date');
  };

  const handleTrash = () => dispatch(setGdriveTrash(el));
  const isInTrash = gdriveTrash.find(el => el.id === id);

  const handleDownload = () => {
    var link = document.createElement('a');
    link.download = el.name;
    link.href = el.webContentLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

      <DownloadBtn onClick={handleDownload}>
        <RiDownloadCloud2Line size="17px" />
      </DownloadBtn>

      <EditBtn
      // onClick={() => setIsModal('edit')}
      >
        <FiEdit3 size="15px" />
      </EditBtn>

      <TrashBtn $hovered={isInTrash} onClick={handleTrash}>
        <FiTrash2 size="16px" />
      </TrashBtn>

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
