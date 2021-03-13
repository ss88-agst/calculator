const display = document.querySelector(".display");
let prevValue = "";
let currentValue = display.innerText;
let operator = "";

/**
 * Adds two numbers together
 *
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns The sum of the addition
 */
const add = (a, b) => a + b;

/**
 * Subtracts two numbers
 *
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns The difference of the subtraction
 */
const subtract = (a, b) => a - b;

/**
 * Multiplies two numbers together
 *
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns The product of the multiplication
 */
const multiply = (a, b) => a * b;

/**
 * Divides two numbers together
 *
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns The quotient of the division
 */
const divide = (a, b) => a / b;

/**
 * Gets the power of the first operand to the second operand
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns The power of the exponentiation
 */
const power = (a, b) => Math.pow(a, b);

/**
 * Takes in two operands and an operator and applies that operation and
 * returns the result
 *
 * @param {string} a the first operand
 * @param {string} b the second operand
 * @param {string} operator the operator to be used in the operation
 * @returns the result of the operation
 */
const operate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
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
