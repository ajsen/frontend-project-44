#!/usr/bin/env node
import runGame from '../src/index.js';
import { introduction, primeGame } from '../src/games/prime-game.js';

runGame(primeGame, introduction);
