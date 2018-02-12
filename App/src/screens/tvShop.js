import ScreenManager from '../ScreenManager'
import TextButton from '../components/textButton'
import MainScreen from '../screens/main'
import Inventory from '../common/inventory'
import Screen from '../common/screen'
import Player from '../Player'

class TVShop extends Screen{
    constructor(context){
        super();
        this.ctx = context;
        this.group = this.ctx.add.group();
        this.group.create(1024,768, 'group');
        this.create();
    }
    initItemList(){
        this.itemShopList = [
            {text:"Spatula $10", price:10, inventory:false},
            {text:"Telescope $100", price:100, inventory:false},
            {text:"Alf Pogs $5", price:5, inventory:{ image:"inventory_alf_pogs" }},
            {text:"Hypno-Ray $100000", price:100000, inventory:true}
        ];
    }

    create(){
        super.create();
        this.initItemList();
        this.grp = this.group.add();
        this.background = this.grp.create(512, 384, 'background_home');
        console.log(this.grp);

        this.title = this.ctx.add.bitmapText(280, 200, 'Font', "Call Sell Network", 46 );
        this.title.tint = "0x00ffff";
        this.updateItemListText();
        this.keyA = this.ctx.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    }

    destroy(){
        this.group.destroy();
    }

    updateItemListText(){
        const listTop = 300;
        const lineHeight = 64;
        for(let i=0;i<this.itemShopList.length;i++){
            new TextButton(this.ctx, 260, listTop + (i*lineHeight+5), this.itemShopList[i].text, this.onSelectedMenuItem.bind(this), {id:i});
        }
    }

    onSelectedMenuItem(obj){
        let selectedItem = this.itemShopList[obj.id];
        if(selectedItem.price <= Player.money){
            if(selectedItem.inventory){
                Inventory.setItem(1, selectedItem.inventory.image);
                Player.money -= selectedItem.price;
                Inventory.setMoney();
            }
        }
    }

    update(){
        if(this.keyA.isDown){
            this.ctx.transitionToScreen("World");
        }
    }
}

export default TVShop;
