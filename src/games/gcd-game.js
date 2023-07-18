import runGame from '../index.js';
import { getRandomNumberFromRange, getGcdOfTwoGivenNumbers } from '../utils.js';

const introduction = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => {
  const number1 = getRandomNumberFromRange(1, 50);
  const number2 = getRandomNumberFromRange(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcdOfTwoGivenNumbers(number1, number2);

  return [question, String(correctAnswer)];
};

export default () => {
  runGame(runGcdGame, introduction);
};
