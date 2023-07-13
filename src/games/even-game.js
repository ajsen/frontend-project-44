import random from 'lodash/random.js';

const isEven = (num) => num % 2 === 0;

const introduction = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const question = random(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export {
  introduction,
  evenGame,
};
