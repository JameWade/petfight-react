
import Phaser from 'phaser';
import Game from "../../phaser/game.ts";
import {useEffect} from "react";

const PhaserComponent = () => {
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            parent:'phaser-game',
            width: 600, // 根据需要设置宽度
            height: 400, // 根据需要设置高度
            scene: Game
        };

        const game = new Phaser.Game(config);

        return () => game.destroy(true);
    }, []);

    return <div id="phaser-game" />;
};

export default PhaserComponent;
