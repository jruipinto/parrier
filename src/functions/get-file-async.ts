import { lstat } from 'fs/promises';
import { posix } from 'path';
import { IFile } from '../models';
const { join, extname } = posix;

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
