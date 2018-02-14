import TVShop from '../screens/tvShop'
import World from '../screens/world'
import Inventory from '../common/inventory'
import {mainGame} from '../MainGame'


class MainScreen {
    constructor(){
        this.screens = [
            {name:"TVShop", class:TVShop},
            {name:"World", class:World}
        ];

        mainGame.game.scene.add("Inventory", Inventory, true);
    }

    getScreen(name){
        for(let i=0;i<this.screens.length;i++){
            let screen = this.screens[i];
            if(screen.name == name){
                return screen;
            }
        }
    }

    preload(){
        this.load.bitmapFont('Font', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
    }

    create(){
        // this.screen = new TVShop(this);
        // this.inventory = new Inventory(this);
    }

    transitionToScreen(name){
        this.screen.destroy();
        console.log("transition to screen: "+name);
        let klass = this.getScreen(name).class;
        // this.screen = new klass(this);
        console.log(this.screen);
    }

    update(){
        // this.screen.update();
    }
}

export default MainScreen;
