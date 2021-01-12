import { promisify } from 'util';
import { lstat as lstatSync } from 'fs';
import { posix } from 'path';
import { IFile } from '../models';
const { join, extname } = posix;
const lstat = promisify(lstatSync);

export async function getFileAsync(path: string, fileName: string): Promise<IFile> {
  const fileStats = await lstat(join(path, fileName));
  return {
    name: fileName,
    path: join(path, fileName),
    accessedAt: fileStats.atime,
    createdAt: fileStats.birthtime,
    updatedAt: fileStats.mtime,
    size: fileStats.size,
    isFile: fileStats.isFile(),
    isDirectory: fileStats.isDirectory(),
    isSymbolicLink: fileStats.isSymbolicLink(),
    extension: extname(fileName),
  };
}
