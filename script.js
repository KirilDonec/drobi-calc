// отримати всі кнопки
const buttons = document.querySelectorAll(".btn");
// отримати div для виведення результату
const result = document.querySelector(".result");

// додати обробник подій для кожної кнопки
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

// функція для обчислення результату
function calculate(event) {
  // отримати значення, яке знаходиться на кнопці, яку ми натиснули
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === "=") {
    // перевірка, чи є значення в полі результату
    if (result.value !== "") {
      // обчислення результату за допомогою функції eval
      result.value = eval(result.value);
    }
  } else if (clickedButtonValue === "C") {
    // очистити поле результату
    result.value = "";
  } else {
    // додати значення кнопки до полю результату
    result.value += clickedButtonValue;
  }
}
