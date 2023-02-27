// Функция для поиска НОД
function findGcd(x, y) {
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

// Функция для сокращения дроби
function reduceFraction(numerator, denominator) {
  var gcd = findGcd(numerator, denominator);
  numerator /= gcd;
  denominator /= gcd;
  return [numerator, denominator];
}

// Функция для сложения дробей
function addFractions() {
  var numerator1 = parseInt(document.getElementById("numerator1").value);
  var denominator1 = parseInt(document.getElementById("denominator1").value);
  var numerator2 = parseInt(document.getElementById("numerator2").value);
  var denominator2 = parseInt(document.getElementById("denominator2").value);

  var newNumerator = numerator1 * denominator2 + numerator2 * denominator1;
  var newDenominator = denominator1 * denominator2;

  var result = reduceFraction(newNumerator, newDenominator);

  document.getElementById("result").value = result[0] + "/" + result[1];
}

// Функция для вычитания дробей
function subtractFractions() {
  var numerator1 = parseInt(document.getElementById("numerator1").value);
  var denominator1 = parseInt(document.getElementById("denominator1").value);
  var numerator2 = parseInt(document.getElementById("numerator2").value);
  var denominator2 = parseInt(document.getElementById("denominator2").value);

  var newNumerator = numerator1 * denominator2 - numerator2 * denominator1;
  var newDenominator = denominator1 * denominator2;

  var result = reduceFraction(newNumerator, newDenominator);

  document.getElementById("result").value = result[0] + "/" + result[1];
}

// Функция для умножения дробей
function multiplyFractions() {
  var numerator1 = parseInt(document.getElementById("numerator1").value);
  var denominator1 = parseInt(document.getElementById("denominator1").value);
  var numerator2 = parseInt(document.getElementById("numerator2").value);
  var denominator2 = parseInt(document.getElementById("denominator2").value);

  var newNumerator = numerator1 * numerator2;
  var newDenominator = denominator1 * denominator2;

  var result = reduceFraction(newNumerator, newDenominator);

  document.getElementById("result").value = result[0] + "/" + result[1];
}

// Функция для деления дробей
function divideFractions() {
  var numerator1 = parseInt(document.getElementById("numerator1").value);
  var denominator1 = parseInt(document.getElementById("denominator1").value);
  var numerator2 = parseInt(document.getElementById("numerator2").value);
  var denominator2 = parseInt(document.getElementById("denominator2").value);

  var newNumerator = numerator1 * denominator2;
  var newDenominator = numerator2 * denominator1;

  var result = reduceFraction(newNumerator, newDenominator);

  document.getElementById("result").value = result[0] + "/" + result[1];
}
