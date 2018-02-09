import ScreenManager from '../ScreenManager'
import TextButton from '../components/textButton'
import Screen from '../common/screen'

class HomeScreen extends Screen{

    initItemList(){
        this.itemShopList = [
            {text:"Spatula $10", price:10},
            {text:"Telescope $100", price:100},
            {text:"Alf Pogs $5", price:5},
            {text:"Hypno-Ray $100000", price:100000}
        ];
    }

    create(){
        super.create();
        this.initItemList();

        this.background = this.add.image(1024, 768, "background_home");
        this.background.x = 512;
        this.background.y = 384;
        

        this.title = this.add.bitmapText(280, 200, 'Font', "Call Sell Network", 46 );
        this.title.tint = "0x00ffff";
        this.updateItemListText();
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }

    updateItemListText(){
        const listTop = 300;
        const lineHeight = 64;
        for(let i=0;i<this.itemShopList.length;i++){
            new TextButton(this, 260, listTop + (i*lineHeight+5), this.itemShopList[i].text, this.onSelectedMenuItem.bind(this), {id:i});
        }
    }

    onSelectedMenuItem(obj){
        console.log("Fire callback");
        let selectedItem = this.itemShopList[obj.id];
        //Player.money = 200;
    }

    update(){
        if(this.keyA.isDown){
            let screenManager = new ScreenManager();
            screenManager.transition("World");
        }
    }
}

export default HomeScreen;
