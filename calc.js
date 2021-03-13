const results = document.querySelector(".results");
const preview = document.querySelector(".preview");
let prevValue = "";
let currentValue = "";
let operator = "";
let result = 0;
let recentOperation = false;

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
 * @param {number} a the first operand
 * @param {number} b the second operand
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
    case "^":
      return power(a, b);
  }
};

/**
 * Resets every underlying global variable back to their original values
 */
const resetState = () => {
  display.innerText = "";
  preview.innerText = "";
  prevValue = "";
  currentValue = "";
  operator = "";
  result = "";
};

const numbers = Array.from(document.querySelectorAll("button.number"));
const deleteButton = document.querySelector("button#delete");
const allClear = document.querySelector("button#all-clear");
const plusMinusButton = document.querySelector("button#plus-minus");
const operators = Array.from(document.querySelectorAll("button.operator"));

numbers.forEach((button) => {
  button.addEventListener("click", (event) => {
    let value = event.target.value;
    currentValue =
      currentValue === "0" || operator !== "" ? value : currentValue + value;
    display.textContent = currentValue;
  });
});

deleteButton.addEventListener("click", (_) => {
  if (currentValue !== "") {
    currentValue = currentValue.slice(0, -1);
    if (currentValue === "-") currentValue = "";
    display.textContent = currentValue;
  }
});

allClear.addEventListener("click", (_) => resetState());

plusMinusButton.addEventListener("click", (_) => {
  if (currentValue !== "0") {
    currentValue =
      currentValue[0] === "-" ? currentValue.substring(1) : "-" + currentValue;
    display.textContent = currentValue;
  }
});

operators.forEach((op) => {
  op.addEventListener("click", (event) => {
    if (prevValue === "" || currentValue === "") {
      prevValue = currentValue;
    }

    let firstOperand = prevValue === "" ? 0 : parseFloat(prevValue);
    let secondOperand = currentValue === "" ? 0 : parseFloat(currentValue);

    if (operator === "") {
      operator = event.target.value === "=" ? "" : event.target.value;
      prevValue = secondOperand.toString();
      preview.textContent =
        operator === "" ? "" : `${firstOperand} ${operator}`;
    } else {
      preview.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
      if (result === "") {
        result = operate(firstOperand, secondOperand, operator);
        display.textContent = result;
      }

      prevValue = currentValue = result;
      operator = event.target.value;
    }
  });
});
