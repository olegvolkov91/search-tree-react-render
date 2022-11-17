import { FC, memo } from 'react';

import Folder from '../Folder';
import File from '../File';
import {genId} from '../../utils';
import { StructureType, NodeType, FileType, FolderType } from '../../types/structure';

type Props = {
  nodes: StructureType;
  currentNode?: FolderType;
};

const Structure: FC<Props> = ({ nodes, currentNode }): JSX.Element => {
  const childNodes = nodes.map(function(currentNode) {
    if(currentNode.type === NodeType.FOLDER) {

      if ('children' in currentNode) {
        return <Structure key={genId()} nodes={currentNode.children} currentNode={currentNode} />
      }
    } else {
      return <File key={genId()} node={currentNode as FileType} />;
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