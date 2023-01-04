import { Game } from './Scenes/game.js';
import { GameOver } from './Scenes/game-over.js';
import { Congratulations } from './Scenes/congratulations';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scene: [Game, GameOver, Congratulations],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
}

var game = new Phaser.Game(config);