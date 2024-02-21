import { Fragment, useState } from 'react';

import { useGdrive } from 'utils/hooks';

import LiFolder from './Li/LiFolder';
import LiFile from './Li/LiFile';
import { List } from './GdriveList.styled';

const GdriveList = () => {
  const { files } = useGdrive();

  const [sortByDate, setSortByDate] = useState(false);
  const [group, setGroup] = useState('');

  const getFolders = () => {
    let folders = files.filter(el => el.mimeType.includes('folder'));

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

  const filtredFolders = getFolders();

  const filtredFiles = files
    .filter(file => !file.mimeType.includes('folder') && file.parents)
    .sort(
      sortByDate
        ? (a, b) => b.createdTime.localeCompare(a.createdTime)
        : (a, b) => a.name.localeCompare(b.name),
    );

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
