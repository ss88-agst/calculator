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
