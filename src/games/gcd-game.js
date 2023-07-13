import random from 'lodash/random.js';

const getGCD = (number1, number2) => {
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

const introduction = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const number1 = random(1, 50);
  const number2 = random(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGCD(number1, number2);

  return [question, String(correctAnswer)];
};

export {
  introduction,
  gcdGame,
};
