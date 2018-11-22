import get from './get'
import { DeepImmutable } from './types'
import { isEqual } from './utils'

export default function merge<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3],
	K5 extends keyof T[K1][K2][K3][K4],
	K6 extends keyof T[K1][K2][K3][K4][K5],
	K7 extends keyof T[K1][K2][K3][K4][K5][K6],
	K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
	K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
	K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9],
>(
	object: T,
	path: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10],
	value: Partial<T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10]>,
): DeepImmutable<T>

export default function merge<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3],
	K5 extends keyof T[K1][K2][K3][K4],
	K6 extends keyof T[K1][K2][K3][K4][K5],
	K7 extends keyof T[K1][K2][K3][K4][K5][K6],
	K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
	K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
>(
	object: T,
	path: [K1, K2, K3, K4, K5, K6, K7, K8, K9],
	value: Partial<T[K1][K2][K3][K4][K5][K6][K7][K8][K9]>,
): DeepImmutable<T>

export default function merge<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3],
	K5 extends keyof T[K1][K2][K3][K4],
	K6 extends keyof T[K1][K2][K3][K4][K5],
	K7 extends keyof T[K1][K2][K3][K4][K5][K6],
	K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
>(
	object: T,
	path: [K1, K2, K3, K4, K5, K6, K7, K8],
	value: Partial<T[K1][K2][K3][K4][K5][K6][K7][K8]>,
): DeepImmutable<T>

export default function merge<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3],
	K5 extends keyof T[K1][K2][K3][K4],
	K6 extends keyof T[K1][K2][K3][K4][K5],
	K7 extends keyof T[K1][K2][K3][K4][K5][K6],
>(
	object: T,
	path: [K1, K2, K3, K4, K5, K6, K7],
	value: Partial<T[K1][K2][K3][K4][K5][K6][K7]>,
): DeepImmutable<T>

export default function merge<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3],
	K5 extends keyof T[K1][K2][K3][K4],
	K6 extends keyof T[K1][K2][K3][K4][K5],
>(
	object: T,
	path: [K1, K2, K3, K4, K5, K6],
	value: Partial<T[K1][K2][K3][K4][K5][K6]>,
): DeepImmutable<T>

export default function merge<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3],
	K5 extends keyof T[K1][K2][K3][K4],
>(
	object: T,
	path: [K1, K2, K3, K4, K5],
	value: Partial<T[K1][K2][K3][K4][K5]>,
): DeepImmutable<T>

export default function merge<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3],
>(
	object: T,
	path: [K1, K2, K3, K4],
	value: Partial<T[K1][K2][K3][K4]>,
): DeepImmutable<T>

export default function merge<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
>(
	object: T,
	path: [K1, K2, K3],
	value: Partial<T[K1][K2][K3]>,
): DeepImmutable<T>

export default function merge<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
>(
	object: T,
	path: [K1, K2],
	value: Partial<T[K1][K2]>,
): DeepImmutable<T>

export default function merge<
	T extends object,
	K extends keyof T,
>(
	object: T,
	path: [K],
	value: Partial<T[K]>,
): DeepImmutable<T>

export default function merge<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3],
	K5 extends keyof T[K1][K2][K3][K4],
	K6 extends keyof T[K1][K2][K3][K4][K5],
	K7 extends keyof T[K1][K2][K3][K4][K5][K6],
	K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7],
	K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
	K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9],
	V,
>(
	obj: T,
	path: [K1?, K2?, K3?, K4?, K5?, K6?, K7?, K8?, K9?, K10?],
	value: V,
): DeepImmutable<T> {
	const target = get(obj, path as any)
	const modifiedKeys = Object.keys(value).filter(key => !isEqual(target[key], value[key]))
	return (modifiedKeys.length) ? $merge(obj, path, modifiedKeys as any) : obj as any

	function $merge(
		$object: typeof obj,
		$path: typeof path,
		$value: Partial<V>,
	): ReturnType<typeof merge> {
		return Object.assign({}, $object, ($path.length > 0) ? {
			[$path[0] as string]: $merge(
				$object[$path[0] as string] as any,
				$path.slice(1) as any,
				$value,
			)
		} : value)
	}
}
