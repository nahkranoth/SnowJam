import HomeScreen from './screens/home'
import WorldScreen from './screens/world'
import MainGame from './MainGame'

let instance = null;

class ScreenManager{
    constructor(){
        this.game = MainGame.game;
        game.scene.add("Home", HomeScreen);
        game.scene.add("World", WorldScreen);

        if(!instance){
            instance = this;
        }

        // to test whether we have singleton or not
        this.time = new Date();

        return instance;
    }

    transition(name){
        this.game.scene.start(name);
    }
}

export default ScreenManager;
