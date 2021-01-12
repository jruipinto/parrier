import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import parrier from './index';
import mockfs from 'mock-fs';

const { expect } = chai;
chai.use(chaiAsPromised);

describe('parrier', () => {
  beforeEach(() => {
    mockfs({
      'mock/folder/path': {
        'file-1.txt': 'this mock file only serves the purpose of testing the parrier module',
        'file-2.md': 'this mock file only serves the purpose of testing the parrier module',
        'level-1': {
          'file-3.txt': 'this mock file only serves the purpose of testing the parrier module',
          'file-4.txt': 'this mock file only serves the purpose of testing the parrier module',
          'level-2': {
            'file-5.txt': 'this mock file only serves the purpose of testing the parrier module',
          },
        },
      },
    });
  });

  after(() => {
    mockfs.restore();
  });

  it('should be able to list files/directories at path', async () => {
    const folderContent = await parrier('mock/folder/path');
    expect(folderContent).to.have.lengthOf(3);
  });

  it('should be able get stats/details of listed files/directories at path', async () => {
    const folderContent = await parrier('mock/folder/path');
    const level1Folder = folderContent.filter(({ name }) => name === 'level-1')[0];
    const file2 = folderContent.filter(({ name }) => name === 'file-2.md')[0];

    expect(level1Folder.isDirectory).to.be.true;
    expect(level1Folder.children).to.be.undefined;
    expect(file2.extension).to.equal('.md');

    expect(level1Folder.accessedAt).to.be.a('Date');
    expect(level1Folder.createdAt).to.be.a('Date');
    expect(level1Folder.extension).to.be.a('String');
    expect(level1Folder.isDirectory).to.be.a('Boolean');
    expect(level1Folder.isFile).to.be.a('Boolean');
    expect(level1Folder.isSymbolicLink).to.be.a('Boolean');
    expect(level1Folder.name).to.be.a('String');
    expect(level1Folder.path).to.be.a('String');
    expect(level1Folder.size).to.be.a('Number');
    expect(level1Folder.updatedAt).to.be.a('Date');
  });

  it('should be able to list the full tree structure of path (when recurse === true)', () => {
    return expect(parrier('mock/folder/path', { recurse: true }))
      .to.eventually.be.an('Array')
      .that.have.nested.property('[2].children[2].children[0].isFile');
  });

  it('should list files at "./" if no path is provided', () => {
    mockfs.restore();
    return expect(parrier()).to.eventually.be.an('Array');
  });

  it('should reject if an error occurs', () => {
    return expect(parrier('no/path')).to.eventually.be.rejected;
  });
});
