import runGame from '../index.js';
import { getRandomNumberFromRange, isEven } from '../utils.js';

const introduction = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => {
  const question = getRandomNumberFromRange(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runGame(runEvenGame, introduction);
};
