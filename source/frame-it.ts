import path from 'node:path';
import {type AspectRatio} from './types/aspect-ratio.js';
import {resize} from './calculation/resize.js';
import {fixAspectRatio} from './calculation/fix-aspect-ratio.js';
import {border} from './image/border.js';
import {bufferOf} from './image/buffer-of.js';
import {describe} from './image/describe.js';

/**
 * Adds a frame around an image and writes it to disk.
 * @param options
 */
export async function frameIt(options: Options) {
	const buffer = await bufferOf(options.filename);
	const description = await describe(buffer);
	const aspectRatio =
		options.aspectRatio === 'original' ? description : options.aspectRatio;
	const resizedDimensions = resize(description, options.factor);
	const fixedDimensions = fixAspectRatio(resizedDimensions, aspectRatio);

	const state = await border(buffer, {
		width: (fixedDimensions.width - description.width) / 2,
		height: (fixedDimensions.height - description.height) / 2,
		color: options.color,
	});

	const {name, ext} = path.parse(options.filename);

	state.write(name + options.postfix + ext, error => {
		if (error) throw error;
	});
}

type Options = {
	filename: string;
	aspectRatio: AspectRatio | 'original';
	factor: number;
	color: string;
	postfix: string;
};
