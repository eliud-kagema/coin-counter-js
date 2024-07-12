markdown
Copy code
# Functional Programming Project

This project demonstrates the basics of functional programming in JavaScript by implementing a few common problems. The focus is on writing pure functions, using closures, currying functions, and recursion. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
  - [Coin Counter](#coin-counter)
  - [Roman Numerals Converter](#roman-numerals-converter)
  - [Prime Sifting](#prime-sifting)
- [Testing](#testing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd functional-programming-project
Install dependencies:
bash
Copy code
npm install
Usage
Development Server
To start the development server, run:

bash
Copy code
npx webpack serve
Running Tests
To run the tests, use:

bash
Copy code
npm test
Project Structure
bash
Copy code
functional-programming-project/
│
├── src/
│   ├── coinCounter.js          # Coin counter functionality
│   ├── romanNumerals.js        # Roman numerals converter functionality
│   ├── primeSieve.js           # Prime sifting functionality
│   ├── index.js                # Entry point
│   └── tests/                  # Test files
│       ├── coinCounter.test.js
│       ├── romanNumerals.test.js
│       └── primeSieve.test.js
│
├── dist/                       # Distribution files
│
├── .babelrc                    # Babel configuration
├── package.json                # Package configuration
├── webpack.config.js           # Webpack configuration
└── README.md                   # This file
Features
Coin Counter
The Coin Counter application takes an amount of money and determines the exact amount of change needed in quarters, dimes, nickels, and pennies.

Recursive Implementation
The coinCounterRecursive function uses recursion to solve the problem.

javascript
Copy code
function coinCounterRecursive(amount, coins = [25, 10, 5, 1], result = []) {
  if (amount === 0) return result;
  const coin = coins[0];
  const count = Math.floor(amount / coin);
  result.push(count);
  return coinCounterRecursive(amount % coin, coins.slice(1), result);
}
Closure-Based Implementation
The createCoinCounter function returns a closure that calculates the change.

javascript
Copy code
function createCoinCounter() {
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
Roman Numerals Converter
The Roman Numerals Converter converts numbers into Roman numerals using recursion.

javascript
Copy code
const romanNumerals = [
  { value: 1000, symbol: 'M' },
  { value: 900, symbol: 'CM' },
  { value: 500, symbol: 'D' },
  { value: 400, symbol: 'CD' },
  { value: 100, symbol: 'C' },
  { value: 90, symbol: 'XC' },
  { value: 50, symbol: 'L' },
  { value: 40, symbol: 'XL' },
  { value: 10, symbol: 'X' },
  { value: 9, symbol: 'IX' },
  { value: 5, symbol: 'V' },
  { value: 4, symbol: 'IV' },
  { value: 1, symbol: 'I' },
];

function toRoman(num, index = 0) {
  if (num === 0) return '';
  const { value, symbol } = romanNumerals[index];
  if (num >= value) {
    return symbol + toRoman(num - value, index);
  } else {
    return toRoman(num, index + 1);
  }
}
Prime Sifting
The Prime Sifting module finds all prime numbers less than a given number using the Sieve of Eratosthenes and recursion.

javascript
Copy code
function sieveOfEratosthenes(n, primes = [], current = 2) {
  if (current > n) return primes;

  const isPrime = primes.every(p => current % p !== 0);

  if (isPrime) primes.push(current);

  return sieveOfEratosthenes(n, primes, current + 1);
}
Testing
All modules are thoroughly tested using Jest. Tests are located in the src/tests directory.

Run the tests with:

bash
Copy code
npm test
License
This project is licensed under the MIT License.

css
Copy code

Feel free to modify the content as per your specific project details and preferences.





