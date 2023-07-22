import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const introduction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getTask = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [String(question), correctAnswer];
};

const runCalc = () => {
  runGame(getTask, introduction);
};

export default runCalc;
