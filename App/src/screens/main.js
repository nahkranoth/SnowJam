import TVShop from '../screens/tvShop'
import World from '../screens/world'

class MainScreen {
    constructor(){
        this.screens = [
            {name:"TVShop", class:TVShop},
            {name:"World", class:World}
        ]
    }

    getScreen(name){
        for(let i=0;i<this.screens.length;i++){
            let screen = this.screens[i];
            if(screen.name == name){
                return screen;
            }
        }
    }

    create(){
        this.screen = new TVShop(this);
    }

    transitionToScreen(name){
        this.screen.destroy();
        console.log("transition to screen: "+name);
        let klass = this.getScreen(name).class;
        this.screen = new klass(this).create();
        console.log(this.screen);
    }

    update(){
        this.screen.update();
    }
}

export default MainScreen;
