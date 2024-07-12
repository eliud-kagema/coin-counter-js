import { toRoman } from '../romanNumerals';

test('toRoman correctly converts numbers to Roman numerals', () => {
  expect(toRoman(3999)).toBe('MMMCMXCIX');
  expect(toRoman(99)).toBe('XCIX');
  expect(toRoman(4)).toBe('IV');
});