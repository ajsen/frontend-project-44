import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const introduction = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getTask = () => {
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = calculate(operand1, operand2, operator);

  return [String(question), String(correctAnswer)];
};

const runCalc = () => {
  runGame(getTask, introduction);
};

export default runCalc;
