import ScreenManager from '../ScreenManager'

class HomeScreen{

    create(){
        this.background = this.add.image(1024, 768, "background");
        this.background.x = 512;
        this.background.y = 384;

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }

    update(){
        if(this.keyA.isDown){
            let screenManager = new ScreenManager();
            screenManager.transition("World");
        }
    }

    preload(){
        this.load.image('background', 'assets/HomeCallSellNetwork.png');
    }
}

export default HomeScreen;
