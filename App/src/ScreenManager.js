import MainScreen from './screens/main'
import {mainGame} from './MainGame'

class ScreenManager{

    init(){
        mainGame.game.scene.add("Main", MainScreen, true);
    }

    transition(name){
        mainGame.game.scene.start(name);
    }
}

export default (new ScreenManager);
