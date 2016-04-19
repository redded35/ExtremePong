//creates a TitleScreen object
var TitleScreen = {
    
    //the preload method runs first
    //it is where we load our assets
    preload : function() {
        //loads an image named 'logo'
        game.load.image('logo', '/assets/images/Vicous Basketball.png');
        //loads an image named 'start'
        game.load.image('startgame', '/assets/images/Start Game!.png');
        game.load.image('survivor mode', '/assets/images/survivor.png');
    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
        //adds an image with image 'logo' at (290, 100)
        this.add.image(180, 20, 'logo');
        //adds a button with image 'start' at location (200, 180) that calls the method startGame when it is clicked on
        this.start = this.add.button(320, 385, 'startgame', this.startGame, this);
        this.start.scale.x = 0.75;
        this.start.scale.y = 0.75;
        
        this.startSurvival = this.add.button(75, 385, 'survivor mode', this.startSurvival, this);
        this.start.scale.x = 0.75;
        this.start.scale.y = 0.75;
        //makes the background color of the whole screen periwinkle
        game.stage.backgroundColor = '#DF0101';
    },

    //this is a method we created and named ourselves
    //it will only run when it is told to by some other method
    startGame: function() {
        //start the state 'GameScreen', as defined in the directory
        this.state.start('GameScreen');
    },
    
    startSurvival: function() {
        this.state.start('SurvivalScreen');
    }
    
};