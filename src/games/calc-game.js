import runGame from '../index.js';
import { getRandomNumberFromRange, getResultOfExpression } from '../utils.js';

const introduction = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const runCalcGame = () => {
  const operand1 = getRandomNumberFromRange(1, 100);
  const operand2 = getRandomNumberFromRange(1, 10);
  const operator = operators[getRandomNumberFromRange(0, operators.length - 1)];
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = getResultOfExpression(operand1, operand2, operator);

  return [question, String(correctAnswer)];
};

export default () => {
  runGame(runCalcGame, introduction);
};
