import phaser from './vendor/phaser'
import Inventory from './common/Inventory'
import DialogueManager from './DialogueManager'

class MainGame {
    constructor(){

        var config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            backgroundColor: '#000000',
            parent: 'phaser-example',
            scene: [ Inventory ],
            preload: this.preload
        };

        this.game = new Phaser.Game(config);

        // this.config = {
        //     width: 1024,
        //     height: 768,
        //     resolution: 1,
        //     type: Phaser.WEBGL,
        //     parent: '',
        //     scene: {
        //         preload: this.preload,
        //         create: this.create,
        //         update: this.update
        //     },
        //
        //     callbacks: {
        //         // preBoot: function () { console.log('I get called before all of the Game systems are created, but after Device is available')},
        //         // postBoot: function () { console.log('I get called after all of the Game systems are running, immediately before raf starts')}
        //     }
        // };
        //
        // this.game = new phaser.Game(this.config);
    }

    // update(){
    //     // console.log("update");
    // }
    //
    preload(){
        console.log("PRELOAD");

        this.load.image('background_home', 'assets/HomeCallSellNetwork.png');
        this.load.image('background_world', 'assets/HeadFuckSnowKiller.png');
        this.load.bitmapFont('Font', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
        this.load.audio('audio', ['assets/audio/cavernous_dreams.mp3', 'assets/audio/spector_the_snowman.mp3']);

        let d = new DialogueManager();
        d.loadDialogues();
    }
    //
    // create(){
    //     ScreenManager.init();
    // }
}

export let mainGame = new MainGame();
