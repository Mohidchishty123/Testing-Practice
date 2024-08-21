// 1. capitalize function
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // 2. reverseString function
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 3. calculator object
  const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : 'Error: Division by zero'),
  };
  
  // 4. caesarCipher function
  function caesarCipher(str, shift) {
    const shiftAmount = shift % 26;
    return str.replace(/[a-zA-Z]/g, (char) => {
      let code = char.charCodeAt(0);
      let shiftCode = code + shiftAmount;
      
      if (char.match(/[A-Z]/)) {
        if (shiftCode > 90) shiftCode -= 26;
        else if (shiftCode < 65) shiftCode += 26;
      } else if (char.match(/[a-z]/)) {
        if (shiftCode > 122) shiftCode -= 26;
        else if (shiftCode < 97) shiftCode += 26;
      }
      
      return String.fromCharCode(shiftCode);
    });
  }
  
  // 5. analyzeArray function
  function analyzeArray(arr) {
    const average = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    
    return { average, min, max, length };
  }
  
  // Test cases
  console.log('capitalize tests:');
  console.log(capitalize('hello')); // Output: 'Hello'
  console.log(capitalize('javascript')); // Output: 'Javascript'
  console.log(capitalize('')); // Output: ''
  
  console.log('reverseString tests:');
  console.log(reverseString('hello')); // Output: 'olleh'
  console.log(reverseString('javascript')); // Output: 'tpircsavaj'
  console.log(reverseString('')); // Output: ''
  
  console.log('calculator tests:');
  console.log(calculator.add(5, 3)); // Output: 8
  console.log(calculator.subtract(5, 3)); // Output: 2
  console.log(calculator.multiply(5, 3)); // Output: 15
  console.log(calculator.divide(10, 2)); // Output: 5
  console.log(calculator.divide(10, 0)); // Output: 'Error: Division by zero'
  
  console.log('caesarCipher tests:');
  console.log(caesarCipher('xyz', 3)); // Output: 'abc'
  console.log(caesarCipher('HeLLo', 3)); // Output: 'KhOOr'
  console.log(caesarCipher('Hello, World!', 3)); // Output: 'Khoor, Zruog!'
  
  console.log('analyzeArray tests:');
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  console.log(object); // Output: { average: 4, min: 1, max: 8, length: 6 }
  