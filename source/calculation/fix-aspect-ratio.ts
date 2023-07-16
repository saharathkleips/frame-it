import {type AspectRatio} from '../types/aspect-ratio.js';
import {type Dimensions} from '../types/dimensions.js';
import {aspectRatioOf} from './aspect-ratio-of.js';

/**
 * Fixes the {@link @AspectRatio} of the given {@link dimensions} to a target {@link aspectRatio}.
 * @param dimensions to fix.
 * @param aspectRatio to target.
 * @returns the new {@link Dimensions}.
 */
export function fixAspectRatio(
	dimensions: Dimensions,
	aspectRatio: AspectRatio,
): Dimensions {
	const {aspectWidth, aspectHeight} = aspectRatioOf(dimensions);
	const widthRatio = aspectWidth / aspectRatio.aspectWidth;
	const heightRatio = aspectHeight / aspectRatio.aspectHeight;

	if (widthRatio > heightRatio) {
		return {
			width: dimensions.width,
			height:
				aspectRatio.aspectHeight * (dimensions.width / aspectRatio.aspectWidth),
		};
	}

	if (heightRatio > widthRatio) {
		return {
			width:
				aspectRatio.aspectWidth *
				(dimensions.height / aspectRatio.aspectHeight),
			height: dimensions.height,
		};
	}

	return dimensions;
}
