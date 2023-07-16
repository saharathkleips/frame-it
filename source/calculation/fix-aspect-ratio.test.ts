import test from 'ava';
import {fixAspectRatio} from './fix-aspect-ratio.js';

for (const {
	input: {dimensions, aspectRatio},
	expected,
} of [
	{
		input: {
			dimensions: {width: 20, height: 30},
			aspectRatio: {aspectWidth: 9, aspectHeight: 16},
		},
		expected: {width: 20, height: 35.555_555_555_555_56},
	},
	{
		input: {
			dimensions: {width: 20, height: 30},
			aspectRatio: {aspectWidth: 4, aspectHeight: 5},
		},
		expected: {width: 24, height: 30},
	},
	{
		input: {
			dimensions: {width: 4672, height: 7008},
			aspectRatio: {aspectWidth: 4, aspectHeight: 5},
		},
		expected: {width: 5606.4, height: 7008},
	},
	{
		input: {
			dimensions: {width: 10, height: 10},
			aspectRatio: {aspectWidth: 1, aspectHeight: 1},
		},
		expected: {width: 10, height: 10},
	},
	{
		input: {
			dimensions: {width: 40, height: 50},
			aspectRatio: {aspectWidth: 4, aspectHeight: 5},
		},
		expected: {width: 40, height: 50},
	},
]) {
	test(`fixAspectRatio ${dimensions.width}x${dimensions.height} to ${aspectRatio.aspectWidth}:${aspectRatio.aspectHeight} is ${expected.width}x${expected.height}`, t => {
		t.deepEqual(fixAspectRatio(dimensions, aspectRatio), expected);
	});
}
