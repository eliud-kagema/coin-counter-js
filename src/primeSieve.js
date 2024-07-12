export function sieveOfEratosthenes(n, primes = [], current = 2) {
    if (current > n) return primes;
  
    const isPrime = primes.every(p => current % p !== 0);
  
    if (isPrime) primes.push(current);
  
    return sieveOfEratosthenes(n, primes, current + 1);
  }