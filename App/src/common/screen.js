import Inventory from './inventory'

class Screen{

    create(){
        new Inventory(this);
    }

}

export default Screen;
