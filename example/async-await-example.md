### Async / await example

```js
/**
 * Async / await
 */

const parrier = require('parrier');

const path = './example-folder/';

(() => {
  try {
    async () => {
      const folderContent = await parrier(path);
      console.log(folderContent); // logs an array of IFile

      // IFile is a typescript interface (of this package)
      // that represents the file object (including
      // file.name, file.extension, file.isFile, etc...)
      // refer to API to know more
    };
  } catch (err) {
    console.log(err.message);
  }
})();
```