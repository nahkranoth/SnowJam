import Player from '../Player'
import TextButton from '../common/textButton'
import {mainGame} from '../MainGame'

class TVShop extends Phaser.Scene{

    constructor() {
        super({ key: 'TVShop' });
    }

    create(){
        this.itemShopList = [
            {text:"Spatula $10", price:10, inventory:false, bought:false, btn:null},
            {text:"Telescope $100", price:100, inventory:false, bought:false, btn:null},
            {text:"Alf Pogs $5", price:5, inventory:{ image:"inventory_alf_pogs" }, bought:false, btn:null},
            {text:"Castle Grayskull $100000", price:100000, inventory:true, bought:false, btn:null}
        ];

        this.background = this.add.sprite(0, 0, "background").setOrigin(0);
        this.background.scaleX = mainGame.game.canvas.width / this.background.width;
        this.background.scaleY = mainGame.game.canvas.height / this.background.height;

        this.title = this.add.bitmapText(167, 150, 'Font', "Call Sell Network", 42 );
        this.title.tint = "0x00ffff";
        this.updateItemListText();

    }

    updateItemListText(){
        const listTop = 230;
        const lineHeight = 64;
        for(let i=0;i<this.itemShopList.length;i++){
            this.itemShopList[i].btn = new TextButton(this, 200, listTop + (i*lineHeight+5), this.itemShopList[i].text, 32, this.onSelectedMenuItem.bind(this), {id:i});
        }
    }

    onSelectedMenuItem(obj){
        let inventory = mainGame.game.scene.keys.Inventory;

        let selectedItem = this.itemShopList[obj.id];
        if(selectedItem.price <= Player.money && !selectedItem.bought){
            if(selectedItem.inventory){
                inventory.setItem(1, selectedItem.inventory.image);
            }
            selectedItem.btn.setColor(0x00ff00);
            selectedItem.bought = true;
            Player.money -= selectedItem.price;
            inventory.setMoney();
        }else if(selectedItem.price >= Player.money){
            selectedItem.btn.setColor(0xff0000);
            inventory.money.tint = 0xff0000;
            setTimeout(() => {
                selectedItem.btn.setColor(0xffffff);
            }, 200);
            setTimeout(() => {
                inventory.money.tint = 0xffffff;
            },300)
        }
    }

    preload(){
        this.load.image('background', 'assets/HomeCallSellNetwork.png');
        this.load.bitmapFont('Font', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
    }
}

export default TVShop;
