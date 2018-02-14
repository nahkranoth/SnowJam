import Player from '../Player'
import {mainGame} from '../MainGame'

let slots = [
    {
        item_name:"inventory_key",
        pos_x:50
    },
    {
        item_name:"",
        pos_x:150
    },
    {
        item_name:"",
        pos_x:255
    },
    {
        item_name:"",
        pos_x:360
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
        this.background.setDepth(1000);
        for(let i=0;i<slots.length;i++){
            this.drawItem(slots[i]);
        }
        this.setMoney(Player.money);
    }
    preload(){
        this.load.image('inventory', 'assets/inventory.png');
        this.load.image('inventory_key', 'assets/inventoryUI/key.png');
        this.load.image('inventory_alf_pogs', 'assets/inventoryUI/alf_pogs.png');
        this.load.bitmapFont('Font', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
    }
    setItem(slot, item){
        slots[slot].item_name = item;
        this.render(this.ctx);
    }
    setMoney(){
        let text = Player.money.toString() + " Money";
        this.money = this.add.bitmapText(30, 30, 'Font', text, 46 );
        this.money.tint = "0xffffff";
        this.money.setDepth(1002);
    }
    drawItem(slot){
        if(slot.item_name == "") return;
        let inventory_slot = this.add.sprite(56, mainGame.game.canvas.height-slot_pos, slot.item_name);
        inventory_slot.x = slot.pos_x;
        inventory_slot.setDepth(1001);

    }
}

export default Inventory;
