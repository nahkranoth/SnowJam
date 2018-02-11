import MainScene from './screens/main'
import MainGame from './MainGame'

class ScreenManager{

    init(){
        MainGame.game.scene.add("Main", MainScene);
    }

    transition(name){
        MainGame.game.scene.start(name);
    }
}

export default (new ScreenManager);
