import test from 'ava';
import {resize} from './resize.js';

for (const {
	input: {image, factor},
	expected,
} of [
	{
		input: {image: {width: 100, height: 100}, factor: 1},
		expected: {width: 100, height: 100},
	},
	{
		input: {image: {width: 100, height: 100}, factor: 0.25},
		expected: {width: 50, height: 50},
	},
	{
		input: {image: {width: 100, height: 100}, factor: 4},
		expected: {width: 200, height: 200},
	},
	{
		input: {image: {width: 100, height: 100}, factor: 2},
		expected: {width: 141.421_356_237_309_5, height: 141.421_356_237_309_5},
	},
	{
		input: {image: {width: 40, height: 50}, factor: 4},
		expected: {width: 80, height: 100},
	},
	{
		input: {image: {width: 50, height: 40}, factor: 4},
		expected: {width: 100, height: 80},
	},
	{
		input: {image: {width: 36, height: 48}, factor: 100},
		expected: {width: 360, height: 480},
	},
	{
		input: {image: {width: 36, height: 48}, factor: 30},
		expected: {width: 197.180_120_701_859_8, height: 262.906_827_602_479_7},
	},
]) {
	test(`resize ${image.width}x${image.height} by ${factor * 100}% is ${
		expected.width
	}x${expected.height}`, t => {
		t.deepEqual(resize(image, factor), expected);
	});
}
