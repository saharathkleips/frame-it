import {fix} from 'mathjs';

/**
 * Truncates the {@link number} if it is even, otherwise rounds up to make it even.
 * @param number
 * @returns an even number.
 */
export function evenify(number: number): number {
	return fix(number) % 2 === 0 ? fix(number) : fix(number) + 1;
}
