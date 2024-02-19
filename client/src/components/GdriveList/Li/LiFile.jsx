import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FaCheck } from 'react-icons/fa';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { SiGoogledrive } from 'react-icons/si';

import { getDate } from 'utils/helpers';
import { useClusters, useGdrive } from 'utils/hooks';
import { setActiveFile } from 'store/gdrive/gdriveSlice';

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

const LiFile = ({ el, sortByDate, setSortByDate }) => {
  const { id, name, webViewLink, webContentLink, createdTime } = el;
  const dispatch = useDispatch();
  const { allClusters } = useClusters();
  const { activeFile } = useGdrive();

  const trim = link => {
    const text = link.replace('https://drive.google.com/', '');
    return text.length <= 30 ? text : text.substring(0, 19).concat('...');
  };

  const handleLinkClick = () => {
    dispatch(setActiveFile(el));
  };

  const favorite = allClusters.some(el => el.gdriveId === id);

  const checked = false;
  const handleChecked = () => console.log('checked');

  const isInTrash = false;
  const handleTrash = () => console.log('trash');

  const handleSort = () => {
    setSortByDate(!sortByDate);
    sortByDate
      ? toast.success('Ascending by Title')
      : toast.success('Ascending by Date');
  };

  const active = id === activeFile?.id;

  return (
    <Li id={active ? 'active-file' : null} $active={active}>
      <LabelFavorite href={webContentLink} $hovered={favorite}>
        <SiGoogledrive size={favorite ? '16px' : '15px'} />
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

      <LabelChecked $hovered={checked}>
        <input
          type="checkbox"
          name="checked"
          checked={checked}
          onChange={handleChecked}
        />
        <FaCheck size="15px" />
      </LabelChecked>

      <DateBtn onClick={handleSort}>{getDate(createdTime)}</DateBtn>
    </Li>
  );
};

export default LiFile;

LiFile.propTypes = {
  el: PropTypes.object,
  sortByDate: PropTypes.bool,
  setSortByDate: PropTypes.func,
  $active: PropTypes.bool,
  $hovered: PropTypes.bool,
};
