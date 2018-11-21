import test from 'ava'

import { imget } from './'

const immutableData = Object.freeze({
	a: Object.freeze({
		aa: Object.freeze({
			aaa: 'AAA',
			aab: 'AAB',
		}),
		ab: Object.freeze({
			aba: 'ABA',
			abb: 'ABB',
		}),
		ac: 'AC',
	}),
	b: Object.freeze({
		ba: Object.freeze({
			baa: 'BAA',
			bab: 'BAB',
		}),
		bb: Object.freeze({
			bba: 'BBA',
			bbb: 'BBB',
		}),
		bc: 'BC',
	}),
	c: 'C',
})

test('imget gets a shallow primitive value', t => {
	const result = imget(immutableData, ['c'])

	t.deepEqual(result, immutableData.c)
})

test('imget gets a shallow object value', t => {
	const result = imget(immutableData, ['a'])

	t.not(result, immutableData.a)
	t.deepEqual(result, immutableData.a)
})

test('imget gets a deep primitive value', t => {
	const result = imget(immutableData, ['a', 'ac'])

	t.deepEqual(result, immutableData.a.ac)
})

test('imget gets a deep object value', t => {
	const result = imget(immutableData, ['a', 'aa'])

	t.not(result, immutableData.a.aa)
	t.deepEqual(result, immutableData.a.aa)
})
