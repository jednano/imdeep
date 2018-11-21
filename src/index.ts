export function imget<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
>(
	object: T,
	path: [K1, K2, K3],
): T[K1][K2][K3] extends Primitive
	? T[K1][K2][K3]
	: DeepImmutable<T[K1][K2][K3]>

export function imget<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
>(
	object: T,
	path: [K1, K2],
): T[K1][K2] extends Primitive
	? T[K1][K2]
	: DeepImmutable<T[K1][K2]>

export function imget<
	T extends object,
	K extends keyof T,
>(
	object: T,
	path: [K],
): T[K] extends Primitive
	? T[K]
	: DeepImmutable<T[K]>

export function imget<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
>(
	object: T,
	path: [K1, K2?, K3?],
) {
	const target = object[path[0]]
	return typeof target === 'object'
		? path.length === 1
			? Object.assign({}, target)
			: imget(target as any, path.slice(1) as any)
		: target
}

declare type Primitive = (
	undefined |
	null |
	boolean |
	string |
	number |
	Function
)

export declare type DeepImmutable<T> =
	T extends Primitive
		? T
		: T extends Array<infer U>
			? IDeepImmutableArray<U>
			: T extends Map<infer K, infer V>
				? IDeepImmutableMap<K, V>
				: DeepImmutableObject<T>

interface IDeepImmutableArray<T> extends ReadonlyArray<
	DeepImmutable<T>
> {}

interface IDeepImmutableMap<K, V> extends ReadonlyMap<
	DeepImmutable<K>,
	DeepImmutable<V>
> {}

declare type DeepImmutableObject<T> = {
	readonly [K in keyof T]: DeepImmutable<T[K]>;
}
