'use strict'

const sortedInsert = (arr, val) => {
	const l = arr.length
	for (let i = 0; i < l; i++) {
		if (val <= arr[i]) {
			arr.splice(i, 0, val)
			return i
		}
	}
	arr.push(val)
	return l
}

const START = 1
const STOP = 0

const flatten = (ranges) => {
	let l, i

	const indexes = []
	const ids = []
	const types = []

	l = ranges.length
	for (i = 0; i < l; i++) {
		const range = ranges[i]

		const startI = sortedInsert(indexes, range[1])
		ids.splice(startI, 0, range[0])
		types.splice(startI, 0, START)

		const endI = sortedInsert(indexes, range[1] + range[2])
		ids.splice(endI, 0, range[0])
		types.splice(endI, 0, STOP)
	}

	const sections = []
	const state = Object.create(null)
	state[ids[0]] = true // initial state

	l = ids.length
	for (i = 1; i < l; i++) {
		const index = indexes[i]
		const lastIndex = i === 0 ? 0 : indexes[i - 1]

		sections.push([
			index - lastIndex,
			Object.keys(state)
		])
		if (types[i] === START) {
			state[ids[i]] = true
		} else {
			delete state[ids[i]]
		}
	}

	return sections
}

module.exports = flatten
