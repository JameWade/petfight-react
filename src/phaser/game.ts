import Phaser from "phaser";

class Game extends Phaser.Scene {
    constructor() {
        super();
        // 初始化代码
    }

    preload() {
        this.load.image('sky', 'src/assets/sky.png');
    }

    create() {
        this.add.image(300,200,'sky')
    }

    update() {
    }
}
export default  Game;
