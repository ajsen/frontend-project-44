#!/usr/bin/env node
import _ from 'lodash';
import readlineSync from 'readline-sync';

const startBrainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const finalRound = 3;
  let initialRound = 1;
  let isFailed = false;
  while (initialRound <= finalRound && !isFailed) {
    const number = _.random(1, 10);
    const isNumberEven = number % 2 === 0;
    const correctAnswer = isNumberEven ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      isFailed = true;
    }
    initialRound += 1;
  }
  if (isFailed === false) {
    console.log(`Congratulations, ${userName}!`);
  }
};

startBrainEvenGame();
