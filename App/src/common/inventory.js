import Player from '../Player'
import {mainGame} from '../MainGame'

let slots = [
    {
        item_name:"inventory_key",
        pos_x:50,
        img:null
    },
    {
        item_name:"",
        pos_x:150,
        img:null
    },
    {
        item_name:"",
        pos_x:255,
        img:null
    },
    {
        item_name:"",
        pos_x:360,
        img:null
    }
];

let ui_height = 98;
let slot_pos = 50;

class Inventory extends Phaser.Scene{

    constructor() {
        super({ key: 'Inventory' });
    }

    create(){
        this.background = this.add.sprite(0, mainGame.game.canvas.height-ui_height, "inventory").setOrigin(0);

        this.money = this.add.bitmapText(30, 30, 'Font', this.playerMoney(), 46 );
        this.money.tint = "0xffffff";
        this.money.setDepth(1002);
        this.scene.bringToTop();

        this.drawItems();

    }
    preload(){
        this.load.image('inventory', 'assets/inventory.png');
        this.load.image('inventory_key', 'assets/inventoryUI/key.png');
        this.load.image('inventory_alf_pogs', 'assets/inventoryUI/alf_pogs.png');
        this.load.bitmapFont('Font', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
    }
    setItem(slot, item){
        this.releaseSlots();
        slots[slot].item_name = item;
        this.drawItems();
    }
    playerMoney(){
        return Player.money.toString() + " Money";
    }
    setMoney(){
        this.money.setText(this.playerMoney());
    }
    releaseSlots(){
        for(let i=0;i<slots.length;i++){
            let slot = slots[i];
            if(slot.img) slot.img.destroy();
        }
    }
    drawItems(){
        for(let i=0;i<slots.length;i++){
            this.drawItem(slots[i]);
        }
    }
    drawItem(slot){
        if(slot.item_name == "") return;
        slot.img = this.add.sprite(56, mainGame.game.canvas.height-slot_pos, slot.item_name);
        slot.img.x = slot.pos_x;
    }
}

export default Inventory;
