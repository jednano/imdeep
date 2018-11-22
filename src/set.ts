import get from './get'
import { DeepImmutable } from './types'
import { isEqual } from './utils'

export default function set<
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
	value: T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10],
): DeepImmutable<T>

export default function set<
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
	value: T[K1][K2][K3][K4][K5][K6][K7][K8][K9],
): DeepImmutable<T>

export default function set<
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
	value: T[K1][K2][K3][K4][K5][K6][K7][K8],
): DeepImmutable<T>

export default function set<
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
	value: T[K1][K2][K3][K4][K5][K6][K7],
): DeepImmutable<T>

export default function set<
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
	value: T[K1][K2][K3][K4][K5][K6],
): DeepImmutable<T>

export default function set<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3],
	K5 extends keyof T[K1][K2][K3][K4],
>(
	object: T,
	path: [K1, K2, K3, K4, K5],
	value: T[K1][K2][K3][K4][K5],
): DeepImmutable<T>

export default function set<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3],
>(
	object: T,
	path: [K1, K2, K3, K4],
	value: T[K1][K2][K3][K4],
): DeepImmutable<T>

export default function set<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
>(
	object: T,
	path: [K1, K2, K3],
	value: T[K1][K2][K3],
): DeepImmutable<T>

export default function set<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
>(
	object: T,
	path: [K1, K2],
	value: T[K1][K2],
): DeepImmutable<T>

export default function set<
	T extends object,
	K extends keyof T,
>(
	object: T,
	path: [K],
	value: T[K],
): DeepImmutable<T>

export default function set<
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
	path: [K1, K2?, K3?, K4?, K5?, K6?, K7?, K8?, K9?, K10?],
	value: V,
) {
	return isEqual(get(obj, path as any), value as any) ? obj : $set(obj, path)

	function $set(
		$object: typeof obj,
		$path: typeof path,
	): ReturnType<typeof set> {
		return Object.assign({}, $object, {
			[$path[0]]: ($path.length > 1)
				? $set($object[$path[0]] as any, $path.slice(1) as any)
				: value
		})
	}
}
