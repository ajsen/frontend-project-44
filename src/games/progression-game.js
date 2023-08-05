import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const introduction = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }

  return progression;
};

const getTask = () => {
  const start = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 10);
  const question = getProgression(start, step, length);
  const missingNumberIndex = getRandomNumber(0, question.length - 1);
  const correctAnswer = question.splice(missingNumberIndex, 1, '..');

  return [question.join(' '), String(correctAnswer)];
};

const runProgression = () => {
  runGame(getTask, introduction);
};

export default runProgression;
