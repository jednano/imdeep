export default function get<
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
): T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10]

export default function get<
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
): T[K1][K2][K3][K4][K5][K6][K7][K8][K9]

export default function get<
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
): T[K1][K2][K3][K4][K5][K6][K7][K8]

export default function get<
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
): T[K1][K2][K3][K4][K5][K6][K7]

export default function get<
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
): T[K1][K2][K3][K4][K5][K6]

export default function get<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3],
	K5 extends keyof T[K1][K2][K3][K4],
>(
	object: T,
	path: [K1, K2, K3, K4, K5],
): T[K1][K2][K3][K4][K5]

export default function get<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3],
>(
	object: T,
	path: [K1, K2, K3, K4],
): T[K1][K2][K3][K4]

export default function get<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
	K3 extends keyof T[K1][K2],
>(
	object: T,
	path: [K1, K2, K3],
): T[K1][K2][K3]

export default function get<
	T extends object,
	K1 extends keyof T,
	K2 extends keyof T[K1],
>(
	object: T,
	path: [K1, K2],
): T[K1][K2]

export default function get<
	T extends object,
	K extends keyof T,
>(
	object: T,
	path: [K],
): T[K]

export default function get<
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
	path: [K1, K2?, K3?, K4?, K5?, K6?, K7?, K8?, K9?, K10?],
) {
	const target = object[path[0]]
	return typeof target === 'object' && path.length > 1
		? get(target as any, path.slice(1) as any)
		: target
}
