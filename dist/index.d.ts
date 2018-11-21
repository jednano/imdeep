export declare function imset<TObject extends object, TValue>(object: TObject, path: Array<string | number>, value: TValue): DeepImmutable<TObject>;
export declare function imget<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey): DeepImmutable<TObject[TKey]>;
declare type Primitive = undefined | null | boolean | string | number;
export declare type DeepImmutable<T> = T extends Primitive ? T : T extends Array<infer U> ? IDeepImmutableArray<U> : T extends Map<infer K, infer V> ? IDeepImmutableMap<K, V> : DeepImmutableObject<T>;
interface IDeepImmutableArray<T> extends ReadonlyArray<DeepImmutable<T>> {
}
interface IDeepImmutableMap<K, V> extends ReadonlyMap<DeepImmutable<K>, DeepImmutable<V>> {
}
declare type DeepImmutableObject<T> = {
    readonly [K in keyof T]: DeepImmutable<T[K]>;
};
export {};
