import random from 'lodash/random.js';

const getExpressionResult = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return "Operation does not exist. Available operations: '+', '-', '*'";
  }
};

const introduction = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const runCalcGame = () => {
  const operand1 = random(1, 10);
  const operand2 = random(1, 10);
  const operator = operators[random(operators.length - 1)];
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = getExpressionResult(operand1, operand2, operator);

  return [question, String(correctAnswer)];
};

export {
  introduction,
  runCalcGame,
};
