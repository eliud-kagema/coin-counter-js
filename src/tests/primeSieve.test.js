import { sieveOfEratosthenes } from '../primeSieve';

test('sieveOfEratosthenes correctly finds all primes less than n', () => {
  expect(sieveOfEratosthenes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});