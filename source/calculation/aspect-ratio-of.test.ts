import test from 'ava';
import {aspectRatioOf} from './aspect-ratio-of.js';

for (const {
	input: {dimensions},
	expected,
} of [
	{
		input: {dimensions: {width: 40, height: 50}},
		expected: {aspectWidth: 4, aspectHeight: 5},
	},
	{
		input: {dimensions: {width: 80, height: 100}},
		expected: {aspectWidth: 4, aspectHeight: 5},
	},
	{
		input: {dimensions: {width: 50, height: 40}},
		expected: {aspectWidth: 5, aspectHeight: 4},
	},
	{
		input: {dimensions: {width: 100, height: 100}},
		expected: {aspectWidth: 1, aspectHeight: 1},
	},
	{
		input: {dimensions: {width: 50, height: 100}},
		expected: {aspectWidth: 1, aspectHeight: 2},
	},
]) {
	test(`aspectRatioOf ${dimensions.width}x${dimensions.height} is ${expected.aspectWidth}:${expected.aspectHeight}`, t => {
		t.deepEqual(aspectRatioOf(dimensions), expected);
	});
}
