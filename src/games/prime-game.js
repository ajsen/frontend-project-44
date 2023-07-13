import random from 'lodash/random.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const introduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  const question = random(2, 99);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export {
  introduction,
  primeGame,
};
