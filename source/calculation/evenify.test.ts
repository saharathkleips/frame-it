import test from 'ava';
import {evenify} from './evenify.js';

for (const {
	input: {number},
	expected,
} of [
	{
		input: {number: 1},
		expected: 2,
	},
	{
		input: {number: 1.1},
		expected: 2,
	},
	{
		input: {number: 1.9},
		expected: 2,
	},
	{
		input: {number: 2},
		expected: 2,
	},
	{
		input: {number: 2.2},
		expected: 2,
	},
	{
		input: {number: 2.8},
		expected: 2,
	},
	{
		input: {number: 3},
		expected: 4,
	},
	{
		input: {number: 3.5},
		expected: 4,
	},
]) {
	test(`evenify ${number} is ${expected}`, t => {
		t.deepEqual(evenify(number), expected);
	});
}
