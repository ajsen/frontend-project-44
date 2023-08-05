import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const introduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  const root = Math.sqrt(num);
  for (let i = 2; i <= root; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getTask = () => {
  const question = getRandomNumber(-10, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [String(question), correctAnswer];
};

const runPrime = () => {
  runGame(getTask, introduction);
};

export default runPrime;
