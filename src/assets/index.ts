import OPENED_FOLDER from './open-folder.png';
import CLOSED_FOLDER from './folder.png';


export const getImage = (name: string): any => {
  const IMAGES: any = {
    CLOSED_FOLDER,
    OPENED_FOLDER,
  };

 return IMAGES[name];
}