class TextButton{
    constructor(context, x, y, text){
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.text = text;

        let txtfield = this.ctx.add.bitmapText(this.x, this.y, 'Font', this.text, 46 ).setInteractive();
        txtfield.tint = "0x00ff00";


        txtfield.on('pointerdown', function () {
            console.log("clicj");
            this.tint  = Math.random() * 16000000;
        })
    }
    create(){
        console.log("create??");
    }

    preload(){
    }
}

export default TextButton;
