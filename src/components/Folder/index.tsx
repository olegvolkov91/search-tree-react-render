import { FC, useState } from 'react';
import { clsx } from 'clsx';

import { getImage } from '../../assets';
import { FolderType, FolderStatus } from '../../types/structure';

type Props = {
  node: FolderType;
  childNodes: React.ReactNode[];
};

const Folder: FC<Props> = ({ node, childNodes }): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(true);

  const toggleStructure = () => setIsOpened(prevState => !prevState);

  const className = clsx('togglable', isOpened ? 'togglable-down' : 'togglable-up');

  return (
    <div>
      <div onClick={toggleStructure} className={className}>
        <img src={getImage(isOpened ? FolderStatus.OPENED_FOLDER : FolderStatus.CLOSED_FOLDER)} alt="folder_icon" />
        <h5 className='folder_name'>
        {node.name}
      </h5>
      </div>
      <ul className={clsx('list', !isOpened && 'list-toggled')}>
        {childNodes}
      </ul>
    </div>
  );
}
export default Folder;
