import type Buffer from 'node:buffer';
import gm from 'gm';

/**
 * {@link Buffer}s a given {@link image}.
 * @param image path to buffer.
 * @returns the buffered image.
 */
export async function bufferOf(image: string): Promise<Buffer> {
	return new Promise((resolve, reject) => {
		gm(image).toBuffer('JPG', (error, buffer) => {
			if (error) reject(error);
			resolve(buffer);
		});
	});
}
