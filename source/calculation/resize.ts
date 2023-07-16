import {type Dimensions} from 'gm';
import {sqrt} from 'mathjs';

/**
 * Resizes the area of the given {@link dimensions} by a given {@link factor}.
 * @param dimensions to resize.
 * @param factor to resize by. 1 = 100%, 1.1 = 110%, 2.5 = 250%, etc.
 * @returns the newly resized {@link Dimensions}.
 */
export function resize(
	{width, height}: Dimensions,
	factor: number,
): Dimensions {
	const sqrtFactor = sqrt(factor) as number;
	return {
		width: width * sqrtFactor,
		height: height * sqrtFactor,
	};
}
