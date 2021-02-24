// @ts-nocheck

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

const doStuff = () => {
  const buttons = document.querySelectorAll("button");

  for (let button of buttons) {
    console.log(button.value);
  }
};

doStuff();
