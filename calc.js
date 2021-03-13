const results = document.querySelector(".results");
const preview = document.querySelector(".preview");
const CURRENT_VALUE_LIMIT = 20;

const numberButtons = document.querySelectorAll("button.number");
const deleteButton = document.querySelector("button#delete");
const allClearButton = document.querySelector("button#all-clear");
const plusMinusButton = document.querySelector("button#plus-minus");
const operatorButtons = document.querySelectorAll("button.operator");

let prevValue = "";
let currentValue = "";
let operator = "";
let result = 0;
let recentOperation = false;

/**
 * Adds two numberButtons together
 *
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns The sum of the addition
 */
const add = (a, b) => a + b;

/**
 * Subtracts two numberButtons
 *
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns The difference of the subtraction
 */
const subtract = (a, b) => a - b;

/**
 * Multiplies two numberButtons together
 *
 * @param {number} a first operand
 * @param {number} b second operand
 * @returns The product of the multiplication
 */
const multiply = (a, b) => a * b;

/**
 * Divides two numberButtons together
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
 * @param {number} a the first operand
 * @param {number} b the second operand
 * @param {number} operator the operator to be used in the operation
 * @returns the result of the operation
 */
const operate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
    case "^":
      return power(a, b);
  }
};

/**
 * Resets every underlying global variable back to their original values
 */
const resetState = () => {
  results.innerText = "";
  preview.innerText = "";
  prevValue = "";
  currentValue = "";
  operator = "";
  result = 0;
  recentOperation = false;

  numberButtons.forEach((button) => button.removeAttribute("disabled"));
};

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let value = event.target.value;
    if (operator && recentOperation) {
      currentValue = "";
      recentOperation = false;
    }
    currentValue = currentValue === "0" ? value : currentValue + value;
    results.textContent = currentValue;

    if (currentValue.length === CURRENT_VALUE_LIMIT) {
      numberButtons.forEach((button) =>
        button.setAttribute("disabled", "true")
      );
    }
  });
});

deleteButton.addEventListener("click", (_) => {
  if (currentValue) {
    currentValue = currentValue.slice(0, -1);
    if (currentValue === "-") currentValue = "";
    results.textContent = currentValue;
  }
  if (currentValue.length < CURRENT_VALUE_LIMIT) {
    numberButtons.forEach((button) => button.removeAttribute("disabled"));
  }
});

allClearButton.addEventListener("click", (_) => resetState());

plusMinusButton.addEventListener("click", (_) => {
  if (currentValue && currentValue !== "0") {
    currentValue =
      currentValue[0] === "-" ? currentValue.substring(1) : "-" + currentValue;
    results.textContent = currentValue;
  }
});

operatorButtons.forEach((op) => {
  op.addEventListener("click", (event) => {
    if (!prevValue) {
      prevValue = currentValue;
    }
    recentOperation = true;

    let firstOperand = !prevValue ? 0 : parseFloat(prevValue);
    let secondOperand = !currentValue ? 0 : parseFloat(currentValue);

    if (prevValue && operator) {
      result = operate(firstOperand, secondOperand, operator);
      if (event.target.value !== "=") operator = event.target.value;
      if (event.target.value === "=") {
        preview.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
        results.textContent = result.toString();
      } else {
        prevValue = currentValue = result;
        preview.textContent = `${result} ${operator}`;
        results.textContent = result.toString();
      }
    } else {
      operator = event.target.value;
      if (event.target.value !== "=") {
        preview.textContent = `${firstOperand} ${operator}`;
      }
    }
  });
});

// TODO: add keyboard support
