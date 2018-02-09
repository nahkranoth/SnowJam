class TextButton{
    constructor(context, x, y, text, callback, params){
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.text = text;
        this.callback = callback;
        this.params = params;
        let txtfield = this.ctx.add.bitmapText(this.x, this.y, 'Font', this.text, 46 ).setInteractive();
        txtfield.tint = "0x00ff00";

        txtfield.on('pointerdown', () => {
            this.callback(this.params);
            txtfield.tint = Math.random() * 16000000;
        })
    }
}

export default TextButton;
