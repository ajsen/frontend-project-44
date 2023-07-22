import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const introduction = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let result = 0;
  let i = 0;
  while (i <= number1 && i <= number2) {
    i += 1;
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }

  return result;
};

const getTask = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);

  return [String(question), String(correctAnswer)];
};

const runGcd = () => {
  runGame(getTask, introduction);
};

export default runGcd;
