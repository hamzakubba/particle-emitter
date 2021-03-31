import { writeFileSync } from 'fs';

export default (path: string, contents: string): void => writeFileSync(path, contents);
