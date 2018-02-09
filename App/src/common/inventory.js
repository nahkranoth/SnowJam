
let instance = null;

class Inventory{
    constructor(context){
        //make a singleton out of this class
        if(!instance){
            instance = this;
        }

        this.ctx = context;
        this.ctx.background = this.ctx.add.image(1024, 98, "inventory");
        this.ctx.background.x = 1024/2;
        this.ctx.background.y = 768-98/2;
        this.ctx.background.setDepth(9999);

        return instance;
    }
}

export default Inventory;
