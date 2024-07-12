
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
   git clone https://github.com/eliud-kagema/coin-counter-js
   cd coin-counter-js


2. Install dependencies:
   ```bash
    npm install


3. Usage
    Development Server
    To start the development server, run:
   ```bash
    npx webpack serve
    


4. Features
    Coin Counter
    The Coin Counter application takes an amount of money and determines the exact amount of change needed in quarters, dimes, nickels, and pennies.

      Recursive Implementation
      The coinCounterRecursive function uses recursion to solve the problem.


  Closure-Based Implementation
  The createCoinCounter function returns a closure that calculates the change.

  Roman Numerals Converter
  The Roman Numerals Converter converts numbers into Roman numerals using recursion.


  Prime Sifting
  The Prime Sifting module finds all prime numbers less than a given number using the Sieve of Eratosthenes and recursion.


  Testing
  All modules are thoroughly tested using Jest. Tests are located in the src/tests directory.

5. Run the tests with:

   ```bash
      npm test

License
This project is licensed under the MIT License.




