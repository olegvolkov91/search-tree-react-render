import { FC } from "react";

import { FileType } from "../../types/structure";

type Props = {
  node: FileType;
};

const File: FC<Props> = ({ node }): JSX.Element => {
  return (<div>{node.name}</div>);
}

export default File;
