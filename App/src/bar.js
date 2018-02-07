export default function bar() {
    console.log("FUBAR!");

    var config = {
        width: 800,
        height: 600,
        resolution: 1,
        type: Phaser.WEBGL,
        parent: '',
        state: {
            preload: preload,
            create: create
        },
        callbacks: {
            preBoot: function () { console.log('I get called before all of the Game systems are created, but after Device is available')},
            postBoot: function () { console.log('I get called after all of the Game systems are running, immediately before raf starts')}
        }
    };

    var game = new Phaser.Game(config);


    function preload(){
        console.log("PRELOAD");
    }

    function create(){
        console.log("createa");
    }
    console.log("RUN!:" + game);
    console.log(game);
}


