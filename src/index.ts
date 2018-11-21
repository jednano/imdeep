export function imset<
	TObject extends object,
	TValue,
>(
	object: TObject,
	path: Array<string | number>,
	value: TValue,
) {
	return shallowSet(object, path[0], value)
}

export function imget<
	TObject extends object,
	TKey extends keyof TObject,
>(
	object: TObject,
	path: TKey,
) {
	return object[path] as DeepImmutable<TObject[TKey]>
}

function shallowSet<
	TObject extends object,
	TValue,
>(
	object: TObject,
	path: string | number,
	value: TValue,
) {
	return Object.assign(
		{},
		object,
		{ [path]: value },
	) as DeepImmutable<TObject>
}

type Primitive = undefined | null | boolean | string | number // | Function

export type DeepImmutable<T> = T extends Primitive
	? T
	: T extends Array<infer U>
		? IDeepImmutableArray<U>
		: T extends Map<infer K, infer V>
			? IDeepImmutableMap<K, V>
			: DeepImmutableObject<T>

interface IDeepImmutableArray<T> extends ReadonlyArray<DeepImmutable<T>> {}
interface IDeepImmutableMap<K, V> extends ReadonlyMap<DeepImmutable<K>, DeepImmutable<V>> {}
type DeepImmutableObject<T> = {
	readonly [K in keyof T]: DeepImmutable<T[K]>
}
