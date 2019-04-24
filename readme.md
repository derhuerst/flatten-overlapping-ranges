# flatten-overlapping-ranges

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
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


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

Instead of strings as range IDs, you can use anything a [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) works with:

```js
flatten([
	[{name: 'A'}, 0, 7],
	[{name: 'B'}, 2, 12]
])
```


## Contributing

If you have a question or have difficulties using `flatten-overlapping-ranges`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/flatten-overlapping-ranges/issues).
