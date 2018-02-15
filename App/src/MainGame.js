import phaser from './vendor/phaser'
import TVShop from './screens/tvShop'
import Inventory from './common/Inventory'
import DialogueManager from './DialogueManager'

class MainGame {
    constructor(){

        var config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            backgroundColor: '#000000',
            parent: 'phaser-example'
        };

        this.game = new Phaser.Game(config);
        let inv = this.game.scene.add("Inventory", Inventory, true);
        this.game.scene.add("TVShop", TVShop, true);
    }

    preload(){
        console.log("PRELOAD");
        // this.load.audio('audio', ['assets/audio/cavernous_dreams.mp3', 'assets/audio/spector_the_snowman.mp3']);
        // let d = new DialogueManager();
        // d.loadDialogues();
    }
    //
    // create(){
    //     ScreenManager.init();
    // }
}

export let mainGame = new MainGame();
