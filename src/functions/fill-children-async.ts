import { IFile } from '../models';
import { parrier } from '../parrier';

export async function fillChildrenAsync(file: IFile): Promise<IFile> {
  if (file.isDirectory) {
    const tree = await parrier(file.path, { recurse: true });
    return { ...file, children: tree };
  }
  return file;
}
