#!/usr/bin/env node
import runGame from '../src/index.js';
import { introduction, evenGame } from '../src/games/even-game.js';

runGame(evenGame, introduction);
