import { Fragment } from 'react';

import { useGdrive } from 'utils/hooks';

const GdriveList = () => {
  const { files } = useGdrive();

  let folders = files.filter(el => el.mimeType.includes('folder'));

  folders = folders.map(el => {
    const parent = el.parents && folders.find(({ id }) => el.parents[0] === id);
    const name = parent?.shared ? `${parent.name} / ${el.name}` : el.name;

    return { ...el, name };
  });

  return (
    <ol>
      {folders.map(folder => {
        const fileList = files
          .filter(
            el =>
              !el.mimeType.includes('folder') &&
              el.parents &&
              el.parents[0] === folder.id,
          )
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(el => {
            return <li key={el.id}>{el.name}</li>;
          });

        if (fileList.length > 0) {
          return (
            <Fragment key={folder.id}>
              <li>{folder.name}</li>
              <ul style={{ listStyle: 'none' }}>{fileList}</ul>
            </Fragment>
          );
        }
      })}
    </ol>
  );
};

export default GdriveList;
