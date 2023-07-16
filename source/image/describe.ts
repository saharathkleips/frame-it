// @ts-expect-error n/prefer-global/buffer
import type Buffer from 'node:buffer';
import gm from 'gm';
import {type AspectRatio} from '../types/aspect-ratio.js';
import {type Dimensions} from '../types/dimensions.js';
import {aspectRatioOf} from '../calculation/aspect-ratio-of.js';

/**
 * Provides an {@link ImageDescription} for a given image file {@link file}.
 * @param file of the image file.
 * @returns an {@link ImageDescription} of the image file.
 */
export async function describe(file: Buffer): Promise<ImageDescription> {
	return new Promise((resolve, reject) => {
		gm(file).size((error, value) => {
			if (error) reject(error);
			if (!value.height || !value.width) reject();

			const dimensions: Dimensions = {
				width: value.width,
				height: value.height,
			};

			resolve({
				...dimensions,
				...aspectRatioOf(dimensions),
			});
		});
	});
}

/**
 * Details of an image.
 */
export type ImageDescription = Dimensions & AspectRatio;
