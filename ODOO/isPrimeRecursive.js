// Prime Number Program: Using a different approach, 
// write a recursive function to check if a number is prime.

function isPrimeRecursive(n, divisor = 2) {
  // Base cases
  if (n <= 1) return false;       // 0 and 1 are not prime
  if (n === 2) return true;       // 2 is prime
  if (n % divisor === 0) return false;  // divisible → not prime
  if (divisor * divisor > n) return true; // no divisors till √n → prime

  // Recursive step
  return isPrimeRecursive(n, divisor + 1);
}

// Test
console.log(isPrimeRecursive(2));  // true
console.log(isPrimeRecursive(7));  // true
console.log(isPrimeRecursive(12)); // false
console.log(isPrimeRecursive(29)); // true
