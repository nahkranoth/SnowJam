class Screen{

    create(){
        this.background = this.add.image(1024, 98, "inventory");
        this.background.x = 1024/2;
        this.background.y = 768-98/2;
        this.background.setDepth(9999);
    }

}

export default Screen;
