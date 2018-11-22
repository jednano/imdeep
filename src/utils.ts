/**
 * Strict equality check that avoids false positives due to (NaN !== NaN) evaluating to true
 */
export function isEqual<T>(a: T, b: T) {
	return a === b || (a !== a && b !== b)
}
