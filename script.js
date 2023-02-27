// Знаходження найбільшого спільного дільника для двох чисел
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

// Знаходження найменшого спільного кратного для двох чисел
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Обчислення суми двох дробів
function addFractions(n1, d1, n2, d2) {
  var lcd = lcm(d1, d2);
  var a = lcd / d1 * n1;
  var b = lcd / d2 * n2;
  var sum = a + b;
  var g = gcd(sum, lcd);
  return { num: sum / g, den: lcd / g };
}

// Обчислення різниці двох дробів
function subtractFractions(n1, d1, n2, d2) {
  var lcd = lcm(d1, d2);
  var a = lcd / d1 * n1;
  var b = lcd / d2 * n2;
  var diff = a - b;
  var g = gcd(diff, lcd);
  return { num: diff / g, den: lcd / g };
}

// Обчислення добутку двох дробів
function multiplyFractions(n1, d1, n2, d2) {
  var product = n1 * n2;
  var g1 = gcd(product, d1);
  var g2 = gcd(g1, d2);
  return { num: product / g2, den: d1 / g1 * d2 / g2 };
}

// Обчислення частки двох дробів
function divideFractions(n1, d1, n2, d2) {
  var quotient = n1 * d2;
  var g1 = gcd(quotient, n2);
  var g2 = gcd(d1, g1);
  return { num: quotient / g1, den: d1 / g2 * n2 / g1 };
}

// Отримання значень з форми та розрахунок результату
function calculate() {
  var n1 = parseInt(document.getElementById("num1").value);
  var d1 = parseInt(document.getElementById("den1").value);
  var n2 = parseInt(document.getElementById("num2").value);
  var d2 = parseInt(document.getElementById("den2").value);
  var op = document.getElementById("operator").value;
  var result = document.getElementById("result");

  if (op === "+") {
    var sum = addFractions(n1, d1, n2, d2);
    result.value = sum.num + "/" + sum.den;
  } else if (op === "-") {
    var diff = subtractFractions(n1, d1, n2, d2);
    result.value = diff.num + "/" + diff.den;
  } else if (op === "*") {
    var product = multiplyFractions(n1, d1, n2, d2);
    result.value = product.num + "/" + product.den;
  } else if (op === "/") {
    var quotient = divideFractions(n1, d1, n2, d2);
    result.value = quotient.num + "/" + quotient.den;
  }
}
