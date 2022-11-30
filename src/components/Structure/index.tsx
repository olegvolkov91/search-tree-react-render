import { FC, memo } from 'react';

import Folder from '../Folder';
import File from '../File';
import { StructureType, NodeType, FileType, FolderType } from '../../types/structure';

type Props = {
  nodes: StructureType;
  currentNode?: FolderType;
};

const Structure: FC<Props> = ({ nodes, currentNode }): JSX.Element => {
  const childNodes = nodes.map((node) => {
    if(node.type === NodeType.FOLDER) {

      if ('children' in node) {
        return <Structure key={node.name} nodes={node.children} currentNode={node} />
      }
    } else {
      return <File key={node.name} node={node as FileType} />;
    }
  });

    return (
      <Folder 
        node={currentNode || ({ name: 'Main Folder' } as FolderType)} 
        childNodes={childNodes}

      />
    );
};

export default memo(Structure);