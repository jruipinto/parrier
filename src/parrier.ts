import { promisify } from 'util';
import { readdir as readdirSync } from 'fs';
import { getFileAsync, fillChildrenAsync } from './functions';
import { IFile } from './models';
const readdir = promisify(readdirSync);

/**
 * Lists everything inside the provided \"path\" (or the full tree structure if \"recurse\" is set), asynchronously.
 *
 * @param path - The path from where to get content
 * @param options - The options input
 * @param options.recurse - The recurse option which lets us get full tree
 * @example
 * ```typescript
 * // common usage:
 * // prints files & folders inside path
 * parrier('the/path/').then(console.log);
 * ```
 * @example
 * ```typescript
 * // Recursive usage:
 * // prints full tree structure
 * parrier('the/path/', { recurse: true }).then(console.log);
 * ```
 * @example
 * ```typescript
 * // Getting './' content:
 * // prints files & folders inside './'
 * parrier().then(console.log);
 * ```
 *
 */
export async function parrier(path = './', options = { recurse: false }): Promise<IFile[]> {
  const { recurse } = options;
  const filesNames: string[] = await readdir(path);
  const files = await Promise.all(filesNames.map((fname) => getFileAsync(path, fname)));
  if (recurse) {
    return await Promise.all(files.map(fillChildrenAsync));
  } else {
    return files;
  }
}
