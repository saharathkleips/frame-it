/**
 * The ratio of an image's width and height.
 */
export type AspectRatio = {
	aspectWidth: number;
	aspectHeight: number;
};

/**
 * Parses the given {@link value} as an {@link AspectRatio} if possible.
 * Possible formats are "{{width}}:{{height}}". e.g. 4:5, 1:1, 16:9, etc.
 * @param value of an {@link AspectRatio} represented as a {@link string}.
 * @returns the {@link AspectRatio} object.
 */
export function parseAspectRatio(value: string): AspectRatio | 'original' {
	if (value === 'original') return value;

	const match = /(\d):(\d)/.exec(value);
	if (match === null)
		throw new Error('Value is not a proper aspect ratio w:h.');
	return {
		aspectWidth: Number(match[1]),
		aspectHeight: Number(match[2]),
	};
}
