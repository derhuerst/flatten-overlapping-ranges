# flatten-overlapping-ranges

[![Greenkeeper badge](https://badges.greenkeeper.io/derhuerst/flatten-overlapping-ranges.svg)](https://greenkeeper.io/)

**Flatten overlapping ranges into a sequence of sections.**

```
---A---     ---C---
  -----B------
     --D--
```

```
-- --- -- --- -- -- -----
A  A   A         C  C
   B   B  B   B  B
       D  D
```

[![npm version](https://img.shields.io/npm/v/flatten-overlapping-ranges.svg)](https://www.npmjs.com/package/flatten-overlapping-ranges)
[![build status](https://api.travis-ci.org/derhuerst/flatten-overlapping-ranges.svg?branch=master)](https://travis-ci.org/derhuerst/flatten-overlapping-ranges)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/flatten-overlapping-ranges.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install flatten-overlapping-ranges
```


## Usage

```js
const flatten = require('flatten-overlapping-ranges')

const sections = flatten([
	['A', 0, 7], // start a 0, length of 7
	['B', 2, 12],
	['D', 5, 5],
	['C', 12, 7]
])
console.log(sections)
```

```js
[
	[2, ['A']], // length of 2
	[3, ['A', 'B']],
	[2, ['A', 'B', 'D']],
	[3, ['B', 'D']],
	[2, ['B']],
	[2, ['C', 'B']],
	[5, ['c']]
]
```


## Contributing

If you have a question or have difficulties using `flatten-overlapping-ranges`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/flatten-overlapping-ranges/issues).
