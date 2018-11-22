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
