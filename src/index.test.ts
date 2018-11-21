import test from 'ava'

import { imget, imset } from './'

test('imset sets a shallow value', t => {
	const original = {
		a: 'b'
	}

	const result = imset(original, ['a'], 'c')

	t.is(result === original, false)
	t.is(result.a, 'c')
})

test('imget gets a shallow value', t => {
	const original = {
		a: 'b'
	}

	const result = imget(original, 'a')

	t.is(result, 'b')
})
