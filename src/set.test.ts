import test from 'ava'

import set from './set'

const bb = Object.freeze({})

const b = Object.freeze({
	ba: 'BA',
	bb,
})

const immutableData = Object.freeze({
	a: 'A',
	b,
})

test('sets a shallow primitive value', t => {
	const result = set(immutableData, ['a'], 'expected')

	t.not(result, immutableData)
	t.is(result.a, 'expected')
})

test('sets a shallow object value', t => {
	const newValue = Object.freeze({
		ba: 'BA',
		bb: Object.freeze({}),
	})
	const result = set(immutableData, ['b'], newValue)

	t.not(result, immutableData)
	t.not(result.b, immutableData.b)
	t.deepEqual(result.b, newValue)
})

test('does not set a shallow primitive value that is the same', t => {
	const result = set(immutableData, ['a'], 'A')

	t.is(result, immutableData)
	t.is(result.a, 'A')
})

test('does not set a shallow object value that is the same', t => {
	const result = set(immutableData, ['b'], b)

	t.is(result, immutableData)
	t.is(result.b, immutableData.b)
})

test('sets a deep primitive value', t => {
	const result = set(immutableData, ['b', 'ba'], 'expected')

	t.not(result, immutableData)
	t.not(result.b, immutableData.b)
	t.is(result.b.ba, 'expected')
})

test('sets a deep object value', t => {
	const newValue = Object.freeze({})
	const result = set(immutableData, ['b', 'bb'], newValue)

	t.not(result, immutableData)
	t.not(result.b, immutableData.b)
	t.not(result.b.bb, immutableData.b.bb)
	t.deepEqual(result.b.bb, immutableData.b.bb)
})
