function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

function simplify(numerator, denominator) {
  const divisor = gcd(numerator, denominator);
  return [numerator / divisor, denominator / divisor];
}

function addFractions(a, b) {
  const numerator = a[0] * b[1] + b[0] * a[1];
  const denominator = a[1] * b[1];
  return simplify(numerator, denominator);
}

function subtractFractions(a, b) {
  const numerator = a[0] * b[1] - b[0] * a[1];
  const denominator = a[1] * b[1];
  return simplify(numerator, denominator);
}

function multiplyFractions(a, b) {
  const numerator = a[0] * b[0];
  const denominator = a[1] * b[1];
  return simplify(numerator, denominator);
}

function divideFractions(a, b) {
  const numerator = a[0] * b[1];
  const denominator = a[1] * b[0];
  return simplify(numerator, denominator);
}

// пример использования функций для сложения дробей
const a = [1, 2];
const b = [1, 3];
const sum = addFractions(a, b);
console.log(sum); // [5, 6]
