import Player from '../Player'

let instance = null;
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

const slot_y_pos = 768-98/2;
class Inventory{

    init(context) {
    }

    render(context){
        this.ctx = context;
        this.ctx.background = this.ctx.add.image(1024, 98, "inventory");
        this.ctx.background.x = 1024/2;
        this.ctx.background.y = 768-98/2;
        this.ctx.background.setDepth(1000);
        for(let i=0;i<slots.length;i++){
            this.drawItem(slots[i]);
        }
        this.setMoney(Player.money);

    }
    setItem(slot, item){
        slots[slot].item_name = item;
        this.render(this.ctx);
    }
    setMoney(){
        let text = Player.money.toString() + " Money";
        this.money = this.ctx.add.bitmapText(30, 30, 'Font', text, 46 );
        this.money.tint = "0xffffff";
        this.money.setDepth(1002);
    }
    drawItem(slot){
        if(slot.item_name == "") return;
        let inventory_slot = this.ctx.add.image(56, 56, slot.item_name);
        inventory_slot.x = slot.pos_x;
        inventory_slot.y = slot_y_pos;
        inventory_slot.setDepth(1001);

    }
}

export default (new Inventory);
