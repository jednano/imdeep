import test from 'ava'

import { isEqual } from './utils'

test('isEqual("a", "a") === true', t => {
	t.is(isEqual('a', 'a'), true)
})

test('isEqual("a", "b") === false', t => {
	t.is(isEqual('a', 'b'), false)
})

test('isEqual({}, {}) === false', t => {
	t.is(isEqual({}, {}), false)
})

test('isEqual(a, a) === true', t => {
	const a = { b: 'c' }
	t.is(isEqual(a, a), true)
})

test('isEqual(NaN, NaN) === true', t => {
	t.is(isEqual(NaN, NaN), true)
})
