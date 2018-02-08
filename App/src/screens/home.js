import ScreenManager from '../ScreenManager'
import TextButton from '../components/textButton'

class HomeScreen{

    initItemList(){
        this.itemShopList = [
            {text:"Spatula 10", price:10},
            {text:"Telescope 100", price:100},
            {text:"Alf Pogs 5", price:5},
            {text:"Hypno-Ray 100000", price:100000}
        ];
    }

    create(){
        this.initItemList();

        this.background = this.add.image(1024, 768, "background");
        this.background.x = 512;
        this.background.y = 384;

        let title = this.add.bitmapText(280, 200, 'Font', "Call Sell Network", 46 );
        title.tint = "0x00ffff";
        this.updateItemListText();
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }

    updateItemListText(){
        const listTop = 300;
        const lineHeight = 64;
        for(let i=0;i<this.itemShopList.length;i++){
            let btn = new TextButton(this, 260, listTop + (i*lineHeight+5), this.itemShopList[i].text);

            // text.tint = "0x00ff00";
            // text.on('pointerdown', function () {
            //     this.setTint(Math.random() * 16000000);
            // })
        }
    }

    update(){
        if(this.keyA.isDown){
            let screenManager = new ScreenManager();
            screenManager.transition("World");
        }
    }

    preload(){
        this.load.bitmapFont('Font', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
        this.load.image('background', 'assets/HomeCallSellNetwork.png');
    }
}

export default HomeScreen;
