import Screen from '../common/screen'

class WorldScreen extends Screen{

    create(){
        super.create();
        this.background = this.add.image(1024, 768, "background_world");
        this.background.x = 512;
        this.background.y = 384;
    }
}

export default WorldScreen;
