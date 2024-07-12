import { coinCounterRecursive, createCoinCounter } from '../coinCounter';

test('coinCounterRecursive correctly calculates change', () => {
  expect(coinCounterRecursive(499)).toEqual([19, 2, 0, 4]);
});

test('createCoinCounter correctly calculates change', () => {
  const countCoins = createCoinCounter();
  expect(countCoins(499)).toEqual([19, 2, 0, 4]);
});