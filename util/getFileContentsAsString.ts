import { readFileSync } from 'fs';

export default (path: string): string => readFileSync(path, 'utf8');
