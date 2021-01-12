<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#welcome-to--pkgname-)

# Welcome to parrier

![GitHub package.json version](https://img.shields.io/github/package-json/v/jruipinto/parrier)
![Prerequisite](https://img.shields.io/badge/node->=8.0.0-blue.svg)
![Prerequisite](https://img.shields.io/badge/npm->=5.0.0-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://jruipinto.github.io/parrier/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/jruipinto/parrier/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/jruipinto/parrier)](https://github.com/jruipinto/parrier/blob/master/LICENSE)

[![Actions Status](https://github.com/jruipinto/parrier/workflows/npm-publish/badge.svg)](https://github.com/jruipinto/parrier/actions)


> This is a package that lists everything inside the provided "path" (or the full tree structure if "recurse" is set), asynchronously.

![Gif showing software working](preview.gif "Preview Gif")

[![Try on repl.it](https://img.shields.io/badge/repl-try%20on%20repl.it-%23f8fafa?style=for-the-badge&logo=repl.it)](https://repl.it/@jruipinto/parrier-demo#index.js)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#table-of-contents)

## Table of Contents

* [Welcome to parrier](#welcome-to-parrier)
	* [Prerequisites](#prerequisites)
	* [Install](#install)
	* [Usage](#usage)
		* [Async / await example](#async--await-example)
		* [Promise example](#promise-example)
	* [API](#api)
	* [Changelog](#changelog)
	* [Author](#author)
	* [Contributing](#contributing)
	* [References](#references)
	* [Show your support](#show-your-support)
	* [License](#license)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#prerequisites)

## Prerequisites


* **node**: >=8.0.0
* **npm**: >=5.0.0
      

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#install)

## Install

```sh
npm install parrier
```



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#usage)

## Usage

### Async / await example

```js
/**
 * Async / await
 */

const parrier = require('parrier');
// import parrier from 'parrier'; // for typescript

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


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#api)

## API

Follow this link to check the [API](https://jruipinto.github.io/parrier/)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#changelog)

## Changelog

Follow this link to check the [Changelog](CHANGELOG.md)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#author)

## Author


**jruipinto**


- GitHub: [@jruipinto](https://github.com/jruipinto)
- LinkedIn: [https://pt.linkedin.com/in/j-rui-pinto](https://pt.linkedin.com/in/j-rui-pinto)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#contributing)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/jruipinto/parrier/issues). You can also take a look at the [contributing guide](https://github.com/jruipinto/parrier/blob/master/CONTRIBUTING.md).


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#references)

## References

- Package name generated with [Namelix](https://namelix.com)
- Readme generated with [@appnest/readme](https://github.com/andreasbm/readme)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#show-your-support)

## Show your support

Give a ⭐️ if this project helped you!



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#license)

## License

Copyright © 2021 [jruipinto](https://github.com/jruipinto).

This project is [MIT](https://github.com/jruipinto/parrier/blob/master/LICENSE) licensed.