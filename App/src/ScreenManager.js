import HomeScreen from './screens/home'

class ScreenManager{
    constructor(game){
        this.game = game;
        game.scene.add("Home", HomeScreen);
    }

    transition(name){
        this.game.scene.start(name);
    }
}

export default ScreenManager;
