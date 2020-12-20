export interface IFile {
  children?: IFile[];
  name: string;
  path: string;
  accessedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  size: number;
  isFile: boolean;
  isDirectory: boolean;
  isSymbolicLink: boolean;
  extension: string;
}
