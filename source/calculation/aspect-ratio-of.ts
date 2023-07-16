import {gcd} from 'mathjs';
import {type AspectRatio} from '../types/aspect-ratio.js';
import {type Dimensions} from '../types/dimensions.js';
import {evenify} from './evenify.js';

/**
 * Converts a the given {@link value} to an {@link AspectRatio} if possible.
 * Possible formats are "{{width}}:{{height}}". e.g. 4:5, 1:1, 16:9, etc.
 * @param value of an {@link AspectRatio} represented as a {@link string}.
 * @returns the {@link AspectRatio} object.
 */
export function aspectRatioOf(value: Dimensions): AspectRatio {
	const denominator = gcd(evenify(value.height), evenify(value.width));
	return {
		aspectWidth: value.width / denominator,
		aspectHeight: value.height / denominator,
	};
}
