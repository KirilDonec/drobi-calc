// Функция, которая складывает две дроби
function addFractions(n1, d1, n2, d2) {
  var resultN = n1 * d2 + n2 * d1;
  var resultD = d1 * d2;
  return reduceFraction(resultN, resultD);
}

// Функция, которая вычитает из одной дроби другую
function subtractFractions(n1, d1, n2, d2) {
  var resultN = n1 * d2 - n2 * d1;
  var resultD = d1 * d2;
  return reduceFraction(resultN, resultD);
}

// Функция, которая умножает две дроби
function multiplyFractions(n1, d1, n2, d2) {
  var resultN = n1 * n2;
  var resultD = d1 * d2;
  return reduceFraction(resultN, resultD);
}

// Функция, которая делит одну дробь на другую
function divideFractions(n1, d1, n2, d2) {
  var resultN = n1 * d2;
  var resultD = n2 * d1;
  return reduceFraction(resultN, resultD);
}

// Функция, которая сокращает дробь до несократимого вида
function reduceFraction(n, d) {
  var gcd = findGcd(n, d);
  return [n / gcd, d / gcd];
}

// Функция, которая находит наибольший общий делитель двух чисел
function findGcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
}

// Получаем значения от пользователя
var n1 = parseInt(prompt("Введите числитель первой дроби:"));
var d1 = parseInt(prompt("Введите знаменатель первой дроби:"));
var n2 = parseInt(prompt("Введите числитель второй дроби:"));
var d2 = parseInt(prompt("Введите знаменатель второй дроби:"));

// Выполняем операции с дробями
var sum = addFractions(n1, d1, n2, d2);
var difference = subtractFractions(n1, d1, n2, d2);
var product = multiplyFractions(n1, d1, n2, d2);
var quotient = divideFractions(n1, d1, n2, d2);

// Выводим результаты
document.write("Сумма: " + sum[0] + "/" + sum[1] + "<br>");
document.write("Разность: " + difference[0] + "/" + difference[1] + "<br>");
document.write("Произведение: " + product[0] + "/" + product[1] + "<br>");
document.write("Частное: " + quotient[0] + "/" + quotient[1]);
