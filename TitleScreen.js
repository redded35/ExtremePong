//creates a TitleScreen object
var TitleScreen = {
    
    //the preload method runs first
    //it is where we load our assets
    preload : function() {
        //loads an image named 'logo'
        game.load.image('logo', '/assets/images/mission_bit_logo.png');
        //loads an image named 'start'
        game.load.image('start', '/assets/images/start.png');
    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
        //adds an image with image 'logo' at (290, 100)
        this.add.image(290, 100, 'logo');
        //adds a button with image 'start' at location (200, 180) that calls the method startGame when it is clicked on
        this.add.button(200, 180, 'start', this.startGame, this);
        //makes the background color of the whole screen periwinkle
        game.stage.backgroundColor = '#CCCFFF';
    },

    //this is a method we created and named ourselves
    //it will only run when it is told to by some other method
    startGame: function() {
        //start the state 'GameScreen', as defined in the directory
        this.state.start('GameScreen');
    }
    
};