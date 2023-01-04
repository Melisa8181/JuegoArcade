import { Scoreboard } from '../components/Scoreboard.js';

export class Game extends Phaser.Scene {

    //inicializacion
    constructor() {
        super({ key: 'game' });
    }

    init() {
        this.scoreboard = new Scoreboard(this);
    }

    preload() {
        this.load.image('background', 'img/background.png');
        this.load.image('platform', 'img/platform.png');
        this.load.image('ball', 'img/ball.png');
        this.load.image('bluebrick', 'img/brickBlue.png');
        this.load.image('blackbrick', 'img/brickBlack.png');
        this.load.image('greenbrick', 'img/brickGreen.png');
        this.load.image('orangebrick', 'img/brickOrange.png');
    }

    create() {
        this.physics.world.setBoundsCollision(true, true, true, false);
        this.add.image(400, 250, 'background');
        this.gameoverImage = this.add.image(400, 90, 'gameover');
        this.gameoverImage.visible = false;
        this.congratsImage = this.add.image(400, 90, 'congratulations');
        this.congratsImage.visible = false;

        this.scoreboard.create();

        this.bricks = this.physics.add.staticGroup({
            key: ['bluebrick', 'orangebrick', 'greenbrick', 'blackbrick'],
            frameQuantity: 10,
            gridAlign: {
                width: 10,
                height: 4,
                cellWidth: 67,
                cellHeight: 34,
                x: 112,
                y: 100
            }
        });

        this.platform = this.physics.add.image(400, 460, 'platform').setImmovable();
        this.platform.body.allowGravity = false;

        this.ball = this.physics.add.image(385, 430, 'ball');
        this.ball.setData('glue', true);
        this.ball.setCollideWorldBounds(true);

        this.physics.add.collider(this.ball, this.platform, this.platformImpact, null, this);
        this.physics.add.collider(this.ball, this.bricks, this.brickImpact, null, this);

        this.ball.setBounce(1);

        this.cursors = this.input.keyboard.createCursorKeys();

    }

    brickImpact(ball, brick) {
        brick.disableBody(true, true);
        this.scoreboard.incrementPoints(10);
        if (this.bricks.countActive() === 0) {
            this.showCongratulations();
        }
    }

    platformImpact(ball, platform) {
        this.scoreboard.incrementPoints(1);
        let relativeImpact = ball.x - platform.x;
        console.log(relativeImpact);
        if(relativeImpact < 0.1 && relativeImpact > -0.1) {
            ball.setVelocityX(Phaser.Math.Between(-10, 10))
        } else {
        ball.setVelocityX(10 * relativeImpact);
        }
    }
    
    update() {
        if (this.cursors.left.isDown) {
            this.platform.setVelocityX(-500);
            if (this.ball.getData('glue')) {
                this.ball.setVelocityX(-500);
            }
        } 
        else if (this.cursors.right.isDown) {
            this.platform.setVelocityX(500);
            if (this.ball.getData('glue')) {
                this.ball.setVelocityX(500);
            }
        }
        else {
            this.platform.setVelocityX(0);
            if (this.ball.getData('glue')) {
                this.ball.setVelocityX(0);
            }
        }

        if (this.ball.y > 500) {
            console.log('fin');
            this.showGameOver();
        }

        if (this.cursors.up.isDown) {
            this.ball.setVelocity(-75, -300);
            this.ball.setData('glue', false);
        }
    }

    showGameOver() {
        this.scene.start('gameover');
    }

    showCongratulations() {
        this.scene.start('congratulations');
    }

}