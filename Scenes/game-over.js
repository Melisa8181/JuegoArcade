import { RestartButton } from '../components/restart-button.js';

export class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'gameover' });
        this.restartButton = new RestartButton(this);
    }

    init(data) {
        this.finalScore = data.score || 0;
    }

    preload() {
        this.load.image('gameover', 'img/gameover.png');
        this.restartButton.preload();
    }

    create() {
        this.add.image(400, 250, 'background');
        this.restartButton.create();
        this.gameoverImage = this.add.image(400, 90, 'gameover');

        this.add.text(400, 200, `PUNTAJE FINAL: ${this.finalScore}`, {
            fontSize: '24px',
            fill: '#fff',
            fontFamily: 'verdana, arial, sans-serif',
            fontWeight: 'bold'
        }).setOrigin(0.5);
    }
}
