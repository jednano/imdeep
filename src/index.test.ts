import test from 'ava'
import {
	DeepImmutable,
	get,
	merge,
	set,
} from './'

test('exports DeepImmutable', t => {
	const obj = {}
	t.is(obj as DeepImmutable<typeof obj>, obj)
})

test('exports get', t => {
	t.is(typeof get, 'function')
})

test('exports merge', t => {
	t.is(typeof merge, 'function')
})

test('exports set', t => {
	t.is(typeof set, 'function')
})
