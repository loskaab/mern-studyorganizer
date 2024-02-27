import { useDispatch } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';

import { useGdrive } from 'utils/hooks';
import { setGdriveFolders } from 'store/gdrive/gdriveSlice';

import LiFolder from './Li/LiFolder';
import LiFile from './Li/LiFile';
import { List } from './GdriveList.styled';

const GdriveList = () => {
  const dispatch = useDispatch();
  const { gdriveFiles, gdriveFolders } = useGdrive();
  const { gdriveTrash, gdriveSelect, gdriveFilter } = useGdrive();

  const [sortByDate, setSortByDate] = useState(false);
  const [group, setGroup] = useState('');

  useEffect(() => {
    const activeFileEl = document.getElementById('active-file');
    const scrollOnActive = () => {
      activeFileEl?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    };
    scrollOnActive();
  }, []);

  // G-Drive folders
  useEffect(() => {
    // get all G-Drive folders
    const getFolders = () => {
      let folders = gdriveFiles.filter(el => el.mimeType.includes('folder'));
      for (let i = 0; i < 10; i += 1) {
        folders = folders.map(el => {
          if (!el.parents) return { ...el };
          const parent = folders.find(({ id }) => el.parents[0] === id);
          const name = parent?.shared ? `${parent.name} / ${el.name}` : el.name;
          const parents = parent?.shared && parent.parents;
          return { ...el, name, parents };
        });
      }
      return folders.sort((a, b) => a.name.localeCompare(b.name));
    };
    // get G-Drive folders with files
    const folders = getFolders().filter(folder => {
      const filesInFolder = gdriveFiles
        .filter(file => !file.mimeType.includes('folder') && file.parents)
        .filter(file => file.parents[0] === folder.id);
      if (filesInFolder.length > 0) {
        return folder;
      }
    });

    dispatch(setGdriveFolders(folders));
  }, [dispatch, gdriveFiles]);

  // G-Drive trash/filter/favorite files
  const isInTrash = gdriveSelect.includes('trash');

  const getFiles = () => {
    const trashId = gdriveTrash.map(el => el.id);

    return isInTrash
      ? gdriveFiles.filter(el => trashId.includes(el.id))
      : gdriveFiles;
  };

  // filtred files
  const filtredFiles = getFiles()
    .filter(({ name, mimeType, parents }) => {
      const allFiles = !mimeType.includes('folder') && parents;
      const allFiltred = name.toLowerCase().includes(gdriveFilter);

      return allFiles && allFiltred;
    })
    .sort(
      sortByDate
        ? (a, b) => b.createdTime.localeCompare(a.createdTime)
        : (a, b) => a.name.localeCompare(b.name),
    );

  // const isInClusters = allClusters.some(el => el.gdriveId === id);

  // filtred folders
  let filtredFolders = !gdriveSelect[0] || isInTrash ? gdriveFolders : [];
  for (let i = 0; i < gdriveSelect.length; i += 1) {
    filtredFolders = [
      ...filtredFolders,
      ...gdriveFolders.filter(el => el.name === gdriveSelect[i]),
    ];
  }

  return (
    <List>
      {filtredFolders.map(folder => {
        const filesInFolder = filtredFiles.filter(
          file => file.parents[0] === folder.id,
        );

        if (filesInFolder.length > 0) {
          return (
            <Fragment key={folder.id}>
              <LiFolder folder={folder.name} />
              {filesInFolder.map(file => (
                <LiFile
                  key={file.id}
                  el={file}
                  group={group}
                  setGroup={setGroup}
                  sortByDate={sortByDate}
                  setSortByDate={setSortByDate}
                />
              ))}
            </Fragment>
          );
        }
      })}
    </List>
  );
};

export default GdriveList;
