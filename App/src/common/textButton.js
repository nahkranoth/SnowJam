import Player from '../Player'
import {mainGame} from '../MainGame'

class TextButton extends Phaser.GameObjects.BitmapText{

    constructor(scene, x, y, text, fontsize,  callback, data){
        // Phaser.GameObjects.BitmapText.call(this, scene, x, y, "Font", text, fontsize);
        super(scene, x, y, 'Font', text, fontsize);
        this.callback = callback;
        this.data = data;
        this.scene = scene;
        this.text = this.scene.add.bitmapText(x, y, 'Font', text, fontsize ).setInteractive();
        this.text.on('pointerdown', () => {
            this.callback.call(this, this.data);
        })
    }

    setColor(color){
        this.text.tint = color;
    }
}
export default TextButton;
