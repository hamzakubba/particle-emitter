import { existsSync, mkdirSync } from 'fs';

export default (path: string): void => {
  if (!existsSync(path)){
    mkdirSync(path);
  }
};
