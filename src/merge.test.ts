import test from 'ava'

import merge from './merge'

const e = { f: 'F' }

const collection = [
	{
		a: {
			b: {
				c: 'C',
				d: 'D',
				e,
			},
		},
	},
]

const data = {
	a: {
		b: {
			c: collection,
		},
	},
}

test('merges a deep object', t => {
	const result = merge(data, ['a', 'b', 'c', 0, 'a', 'b'], {
		c: 'C*',
		e,
	})

	t.not(result, data)
	t.deepEqual(result.a.b.c[0].a.b, {
		c: 'C*',
		d: 'D',
		e: {
			f: 'F',
		},
	})
	t.is(result.a.b.c[0].a.b.e, e)
})

test('merges only the keys that have been modified', t => {
	const result = merge(data, ['a', 'b', 'c', 0, 'a', 'b'], {
		c: 'C*',
		d: 'D*',
	})

	t.not(result, data)
	t.deepEqual(result.a.b.c[0].a.b, {
		c: 'C*',
		d: 'D*',
		e: {
			f: 'F',
		},
	})
})

test('does not merge when values already exist in target', t => {
	const result = merge(data, ['a', 'b', 'c', 0, 'a', 'b'], {
		c: 'C',
		d: 'D',
	})

	t.is(result, data)
})
