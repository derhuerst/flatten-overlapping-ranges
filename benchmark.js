'use strict'

const {Suite} = require('benchmark')

const flatten = require('.')

const A = 'A'
const B = 'B'
const C = 'C'
const D = 'D'
const E = 'E'

const fourRanges = [
	[A, 0, 7],
	[B, 2, 12],
	[D, 5, 5],
	[C, 12, 7]
]

const tenRanges = [
	[A, 0, 7],
	[B, 2, 12],
	[D, 5, 5],
	[C, 12, 7],
	[A, 13, 2],
	[B, 14, 8],
	[C, 15, 3],
	[D, 16, 4]
]

new Suite()
.add('4 ranges', function () {
	for (const _ of flatten(fourRanges)) {}
})
.add('10 ranges', function () {
	for (const _ of flatten(tenRanges)) {}
})

.on('error', (err) => {
	console.error(err)
	process.exitCode = 1
})
.on('cycle', (e) => {
	console.log(e.target.toString())
})
.run()
