// Euclid's algorithm

// Find greatest common denominator between 2 integers.
// ex. gcd of 20 and 8 === 4

// Algorithm:
//  a / b === r
// --------------
// 20 / 8 === 4
// 8 -> a, 4 -> b 
//  8 / 4 === 0

function gcd(a, b) {
  while (b !== 0) {
    let temp = a;
    a = b;
    b = temp % b;

  }
  return a;
}

console.log(gcd(20, 8)); // should equal 4