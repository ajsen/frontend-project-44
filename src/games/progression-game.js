import random from 'lodash/random.js';

const getProgression = (start, step, progressionLength) => {
  const progression = [];

  for (let i = start; progression.length <= progressionLength - 1; i += step) {
    progression.push(i);
  }

  return progression;
};

const introduction = 'What number is missing in the progression?';

const runProgressionGame = () => {
  const start = random(1, 100);
  const step = random(1, 5);
  const progressionLength = random(5, 10);
  const question = getProgression(start, step, progressionLength);
  const missingNumberIndex = random(0, question.length - 1);
  const correctAnswer = question.splice(missingNumberIndex, 1, '..');

  return [String(question.join(' ')), String(correctAnswer)];
};

export {
  introduction,
  runProgressionGame,
};
