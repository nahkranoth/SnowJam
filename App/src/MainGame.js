import phaser from './vendor/phaser'
import ScreenManager from './ScreenManager'

class MainGame {
    constructor(){
        this.config = {
            width: 1024,
            height: 768,
            resolution: 1,
            type: Phaser.WEBGL,
            parent: '',
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update
            },
            callbacks: {
                // preBoot: function () { console.log('I get called before all of the Game systems are created, but after Device is available')},
                // postBoot: function () { console.log('I get called after all of the Game systems are running, immediately before raf starts')}
            }
        };

        this.game = new Phaser.Game(this.config);
    }

    update(){
        // console.log("update");
    }

    preload(){
        console.log("PRELOAD");
        // this.game.load.bitmapFont('mainFont', 'assets/font/font.png', 'assets/font/font.fnt');
    }

    create(){
        let t = new ScreenManager();
        t.transition("Home");
    }
}

export default (new MainGame);


