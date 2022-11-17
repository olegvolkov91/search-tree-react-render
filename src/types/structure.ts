
export enum FolderStatus {
  OPENED_FOLDER = 'OPENED_FOLDER',
  CLOSED_FOLDER = 'CLOSED_FOLDER'
};

export enum NodeType {
  FOLDER = 'FOLDER',
  FILE = 'FILE'
};

export type FileType = {
  mime: string;
  name: string;
  type: NodeType.FILE;
};

export type FolderType = {
  children: (FileType | FolderType)[];
  name: string;
  type: NodeType.FOLDER;
};

export type StructureType = (FileType | FolderType)[];
