#!/usr/bin/env node
import runGame from '../src/index.js';
import { introduction, progressionGame } from '../src/games/progression-game.js';

runGame(progressionGame, introduction);
