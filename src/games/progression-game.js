import runGame from '../index.js';
import { getRandomNumberFromRange, getProgression } from '../utils.js';

const introduction = 'What number is missing in the progression?';

const runProgressionGame = () => {
  const start = getRandomNumberFromRange(1, 100);
  const step = getRandomNumberFromRange(1, 5);
  const progressionLength = getRandomNumberFromRange(5, 10);
  const question = getProgression(start, step, progressionLength);
  const missingNumberIndex = getRandomNumberFromRange(0, question.length - 1);
  const correctAnswer = question.splice(missingNumberIndex, 1, '..');

  return [String(question.join(' ')), String(correctAnswer)];
};

export default () => {
  runGame(runProgressionGame, introduction);
};
