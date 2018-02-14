class World{
    constructor(context){
        this.ctx = context;
        this.create();
    }
    create(){
        this.background = this.ctx.add.image(1024, 768, "background_world");
        this.background.x = 512;
        this.background.y = 384;
        this.keyA = this.ctx.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }
    destroy(){
        this.ctx.input.keyboard.removeKey(Phaser.Input.Keyboard.KeyCodes.A);
    }
    update(){
        if(this.keyA.isDown){
            this.ctx.transitionToScreen("TVShop");
        }
    }
}

export default World;
