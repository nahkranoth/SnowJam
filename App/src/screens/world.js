class WorldScreen{

    create(){
        this.background = this.add.image(1024, 768, "background");
        this.background.x = 512;
        this.background.y = 384;
    }

    preload(){
        this.load.image('background', 'assets/HeadFuckSnowKiller.png');
    }
}

export default WorldScreen;
