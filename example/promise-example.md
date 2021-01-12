### Promise example

```js
/**
 * Promise
 */

const parrier = require('parrier');
// import parrier from 'parrier'; // for typescript

const path = './example-folder/';

parrier(path)
  .then((folderContent) => console.log(folderContent))
  .catch((err) => console.log(err.message));
```