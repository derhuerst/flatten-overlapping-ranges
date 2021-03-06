'use strict'

const a = require('assert')

const flatten = require('.')

const A = 'A'
const B = {some: 'obj'}
const C = 'C'
const D = 'D'

const sections = Array.from(flatten([
	[A, 0, 7],
	[B, 2, 12],
	[D, 5, 5],
	[C, 12, 7]
]))

// todo: sort
const expected = [
	[2, [A]],
	[3, [A, B]],
	[2, [A, B, D]],
	[3, [B, D]],
	[2, [B]],
	[2, [B, C]],
	[5, [C]]
]

a.ok(Array.isArray(sections))
a.strictEqual(sections.length, expected.length)
for (let i = 0; i < sections.length; i++) {
	const [actualLength, actualIds] = sections[i]
	const [expectedLength, expectedIds] = expected[i]
	a.strictEqual(actualLength, expectedLength)
	a.deepStrictEqual(actualIds.sort(), expectedIds.sort())
}

const sections2 = Array.from(flatten([
	[A, 0, 3],
	[B, 0, 5]
]))
a.ok(sections2.every(section => section[0] > 0))
