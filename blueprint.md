# Welcome to {{ pkg.name }}

![GitHub package.json version](https://img.shields.io/github/package-json/v/{{ pkg.author.name }}/{{ pkg.name }})
![Prerequisite](https://img.shields.io/badge/node-{{ pkg.engines.node }}-blue.svg)
![Prerequisite](https://img.shields.io/badge/npm-{{ pkg.engines.npm }}-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://{{ pkg.author.name }}.github.io/{{ pkg.name }}/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/{{ pkg.author.name }}/{{ pkg.name }}/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/{{ pkg.author.name }}/{{ pkg.name }})](https://github.com/{{ pkg.author.name }}/{{ pkg.name }}/blob/master/LICENSE)

[![Actions Status](https://github.com/{{ pkg.author.name }}/{{ pkg.name }}/workflows/npm-publish/badge.svg)](https://github.com/{{ pkg.author.name }}/{{ pkg.name }}/actions)


> {{ pkg.description }}

![Gif showing software working]({{ pkg.readmeMeta.preview.url }} "Preview Gif")

[![Try on repl.it](https://img.shields.io/badge/repl-try%20on%20repl.it-%23f8fafa?style=for-the-badge&logo=repl.it)]({{ pkg.readmeMeta.demo.url }})

{{ template:toc }}


## Prerequisites


{{ pkg.engines }}
      
## Install

```sh
npm install {{ pkg.name }}
```


## Usage

{{ load:example/async-await-example.md }}

{{ load:example/promise-example.md }}

## API

Follow this link to check the [API]({{ pkg.homepage }})

## Changelog

Follow this link to check the [Changelog](CHANGELOG.md)

## Author


**{{ pkg.author.name }}**


- GitHub: [@{{ pkg.author.name }}](https://github.com/{{ pkg.author.name }})
- LinkedIn: [{{ pkg.author.linkedin }}]({{ pkg.author.linkedin }})

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/{{ pkg.author.name }}/{{ pkg.name }}/issues). You can also take a look at the [contributing guide](https://github.com/{{ pkg.author.name }}/{{ pkg.name }}/blob/master/CONTRIBUTING.md).

## References

- Package name generated with [Namelix](https://namelix.com)
- Readme generated with [@appnest/readme](https://github.com/andreasbm/readme)

## Show your support

Give a ⭐️ if this project helped you!


## License

Copyright © 2021 [{{ pkg.author.name }}](https://github.com/{{ pkg.author.name }}).

This project is [{{ pkg.license }}](https://github.com/{{ pkg.author.name }}/{{ pkg.name }}/blob/master/LICENSE) licensed.