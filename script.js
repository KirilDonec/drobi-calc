function calculate() {
  // Отримуємо значення введені користувачем
  const integer1 = parseInt(document.getElementById('integer1').value);
  const numerator1 = parseInt(document.getElementById('numerator1').value);
  const denominator1 = parseInt(document.getElementById('denominator1').value);

  const integer2 = parseInt(document.getElementById('integer2').value);
  const numerator2 = parseInt(document.getElementById('numerator2').value);
  const denominator2 = parseInt(document.getElementById('denominator2').value);

  // Перевірка на некоректні дані
  if (isNaN(integer1) || isNaN(numerator1) || isNaN(denominator1) || isNaN(integer2) || isNaN(numerator2) || isNaN(denominator2)) {
    document.getElementById('result').innerHTML = "Будь ласка, введіть коректні значення для обох дробів.";
    return;
  }

  // Обрахунок значень
  const result_integer = integer1 + integer2;
  const result_numerator = numerator1 * denominator2 + numerator2 * denominator1;
  const result_denominator = denominator1 * denominator2;

  // Скорочення дробу
  const gcd = getGcd(result_numerator, result_denominator);
  const simplified_numerator = result_numerator / gcd;
  const simplified_denominator = result_denominator / gcd;

  // Показ результату
  let result = '';
  if (result_integer !== 0) {
    result += result_integer + ' ';
  }
  if (simplified_numerator !== 0) {
    result += simplified_numerator + '/' + simplified_denominator;
  }
  if (result === '') {
    result = '0';
  }
  document.getElementById('result').innerHTML = result;
}

function getGcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return getGcd(b, a % b);
  }
}
