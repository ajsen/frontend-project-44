import runGame from '../index.js';
import { getRandomNumberFromRange, isPrime } from '../utils.js';

const introduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrimeGame = () => {
  const question = getRandomNumberFromRange(2, 99);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runGame(runPrimeGame, introduction);
};
