// @ts-expect-error n/prefer-global/buffer
import type Buffer from 'node:buffer';
import gm, {type State} from 'gm';

/**
 * Applies a border around the given image {@link buffer}.
 * @param buffer of an image.
 * @returns the {@link State} of the image with the border applied.
 */
export async function border(
	buffer: Buffer,
	{width, height, color}: Options,
): Promise<State> {
	if (!color.startsWith('#')) color = `#${color}`;
	return new Promise(resolve => {
		resolve(gm(buffer).borderColor(color).border(width, height));
	});
}

type Options = {
	width: number;
	height: number;
	color: string;
};
