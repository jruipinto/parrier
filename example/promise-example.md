### Promise example

```js
/**
 * Promise
 */

const parrier = require('parrier');

const path = './example-folder/';

parrier(path)
  .then((folderContent) => console.log(folderContent))
  .catch((err) => console.log(err.message));
```