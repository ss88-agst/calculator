const display = document.querySelector(".display");
let prevValue = "";
let currentValue = display.innerText;
let operator = "";

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const power = (a, b) => Math.pow(a, b);

const operate = (a, b, operator) => {
  let output;
  switch (operator) {
    case operator === "+":
      output = add(a, b);
      break;
    case operator === "-":
      output = subtract(a, b);
      break;
    case operator === "*":
      output = multiply(a, b);
      break;
    case operator === "/":
      output = divide(a, b);
      break;
  }

  return output;
};

const numbers = Array.from(document.querySelectorAll("button.number"));
const deleteButton = document.querySelector("button#delete");
const allClear = document.querySelector("button#all-clear");
const plusMinusButton = document.querySelector("button#plus-minus");
const operators = Array.from(document.querySelectorAll("button.operator"));

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

plusMinusButton.addEventListener("click", (_) => {
  if (currentValue !== "0") {
    currentValue =
      currentValue[0] === "-" ? currentValue.substring(1) : "-" + currentValue;
    display.textContent = currentValue;
  }
});

operators.forEach((op) => {
  op.addEventListener("click", (event) => {});
});
