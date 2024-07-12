export function coinCounterRecursive(amount, coins = [25, 10, 5, 1], result = []) {
    if (amount === 0) return result;
    const coin = coins[0];
    const count = Math.floor(amount / coin);
    result.push(count);
    return coinCounterRecursive(amount % coin, coins.slice(1), result);
  }
  
  export function createCoinCounter() {
    return function(amount) {
      const coins = [25, 10, 5, 1];
      const result = [];
  
      function countCoins(amount, index) {
        if (amount === 0) return result;
        const coin = coins[index];
        const count = Math.floor(amount / coin);
        result.push(count);
        return countCoins(amount % coin, index + 1);
      }
  
      return countCoins(amount, 0);
    };
  }
  