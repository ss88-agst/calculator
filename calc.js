let prevValue = "";
let currentValue = "";
let operator = "";
const display = document.querySelector(".display");

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

// Might add this to the calculator in order to add another functionality
const power = (a, b) => {
  return Math.pow(a, b);
};

const operate = (a, b, operator) => {
  switch (operator) {
    case operator == "+":
      add(a, b);
      break;
    case operator == "-":
      subtract(a, b);
      break;
    case operator == "*":
      multiply(a, b);
      break;
    case operator == "/":
      divide(a, b);
      break;
  }
};

const numbers = Array.from(document.querySelectorAll("button.number"));
const allClear = document.querySelector("button#all-clear");
numbers.forEach((button) => {
  button.addEventListener("click", (event) => {
    let value = event.target.value;
    prevValue = currentValue;

    if (prevValue === "0") prevValue = "";
    currentValue = prevValue + value;
    display.textContent = currentValue;
  });
});

allClear.addEventListener("click", (_) => {
  prevValue = "";
  currentValue = "";
  display.innerText = "0";
});
