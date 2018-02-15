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
        console.log("main screen");
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
    }

    transitionToScreen(name){
        // let klass = this.getScreen(name).class;
        // this.screen = new klass(this);
    }

    update(){
        // this.screen.update();
    }
}

export default MainScreen;
