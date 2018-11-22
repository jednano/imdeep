import test from 'ava'

import get from './get'

const collection = [
	{
		a: {
			b: {
				c: 'd',
			},
		},
	},
]

const data = { a: { b: { c: collection } } }

test('gets a shallow value w/o modification', t => {
	const result = get(data, ['a'])

	t.is(result, data.a)
})

test('gets a deep value w/o modification', t => {
	const result = get(data, ['a', 'b', 'c'])

	t.is(result, collection)
})

test('navigates through a collection (number in path)', t => {
	const result = get(data, ['a', 'b', 'c', 0, 'a', 'b', 'c'])

	t.is(result, 'd')
})
