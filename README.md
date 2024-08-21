# JavaScript Utility Functions

This repository contains a set of JavaScript utility functions along with their corresponding test cases. The functions include basic string manipulations, a simple calculator, a Caesar cipher, and an array analysis utility.

## Functions Included

### 1. `capitalize`
A function that takes a string and returns it with the first character capitalized.

**Usage:**
```javascript
capitalize('hello'); // Output: 'Hello'
2. reverseString
A function that takes a string and returns it reversed.
reverseString('hello'); // Output: 'olleh'

3. calculator
An object that contains functions for the basic operations: add, subtract, multiply, and divide.
calculator.add(5, 3); // Output: 8
calculator.subtract(5, 3); // Output: 2
calculator.multiply(5, 3); // Output: 15
calculator.divide(10, 2); // Output: 5

4. caesarCipher
A function that takes a string and a shift factor and returns the string with each character "shifted" according to the Caesar cipher.
caesarCipher('Hello, World!', 3); // Output: 'Khoor, Zruog!'


Here's a sample README.md file for your GitHub repository:

markdown
Copy code
# JavaScript Utility Functions

This repository contains a set of JavaScript utility functions along with their corresponding test cases. The functions include basic string manipulations, a simple calculator, a Caesar cipher, and an array analysis utility.

## Functions Included

### 1. `capitalize`
A function that takes a string and returns it with the first character capitalized.

**Usage:**
```javascript
capitalize('hello'); // Output: 'Hello'
2. reverseString
A function that takes a string and returns it reversed.

Usage:

javascript
Copy code
reverseString('hello'); // Output: 'olleh'
3. calculator
An object that contains functions for the basic operations: add, subtract, multiply, and divide.

Usage:

javascript
Copy code
calculator.add(5, 3); // Output: 8
calculator.subtract(5, 3); // Output: 2
calculator.multiply(5, 3); // Output: 15
calculator.divide(10, 2); // Output: 5
4. caesarCipher
A function that takes a string and a shift factor and returns the string with each character "shifted" according to the Caesar cipher.

Usage:

javascript
Copy code
caesarCipher('Hello, World!', 3); // Output: 'Khoor, Zruog!'
Features:

Wraps from 'z' to 'a'
Preserves the case of letters
Keeps punctuation, spaces, and non-alphabetical characters unchanged
5. analyzeArray
A function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
const result = analyzeArray([1, 8, 3, 4, 2, 6]);
// Output: { average: 4, min: 1, max: 8, length: 6 }
