#!/usr/bin/env node
import meow from 'meow';
import {frameIt} from './frame-it.js';
import {parseAspectRatio} from './types/aspect-ratio.js';

const cli = meow(
	`
	Usage
	  $ frame-it --file image.jpg

	Options
		--file, -f            location of the image to use.
		--aspectRatio, -a    to set the image/s to in width:height format. ex. original, 1:1, 4:5, 2:3, ...
		--color, -#          of the border around the image. ex. ffffff, 000, fa12bc, ...
		--percent, -%        percent size of the new image with the border applied.
		--postfix, -p         of the new image files.

	Examples
	  $ frame-it -f image.jpg -f image2.jpg -a 4:5 -# ffffff -% 120 -p '-new'
`,
	{
		importMeta: import.meta,
		flags: {
			file: {
				type: 'string',
				shortFlag: 'f',
				isRequired: true,
				isMultiple: true,
			},
			aspectRatio: {
				type: 'string',
				shortFlag: 'a',
				default: 'original',
			},
			color: {
				type: 'string',
				shortFlag: '#',
				default: 'ffffff',
			},
			percent: {
				type: 'number',
				shortFlag: '%',
				default: 100,
			},
			postfix: {
				type: 'string',
				shortFlag: 'p',
				default: '.framed',
			},
		},
	},
);

const filenames = new Set(cli.flags.file);

for (const filename of filenames) {
	void frameIt({
		filename,
		aspectRatio: parseAspectRatio(cli.flags.aspectRatio),
		factor: cli.flags.percent / 100,
		color: cli.flags.color,
		postfix: cli.flags.postfix,
	});
}
