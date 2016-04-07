var isShooting = false;
var score = 0;
var misses = 0;
//creates a GameScreen object
var GameScreen = {
    
    //the preload method runs first
    //it is where we load our assets
    preload : function() {
        //loads an image named 'logo'
        game.load.image('logo', 'assets/images/basketball.png');
        game.load.image('hoop', '/assets/images/basketball-net.jpg');
        game.load.image('bg', '/assets/images/basketball-court-backgrounds1.jpg');
        //loads an image named 'start'
        game.load.image('start', '/assets/images/start.png');
    },
    
    //the create method is run after the preload method
    //it is where we set up the basics of the game, essentially what it will look like when we start the game
    create: function () {
//makes the background color of the whole screen black
        game.stage.backgroundColor = '#000000';
        
        this.bg = game.add.image(0,0, 'bg');
        this.bg.width = 640;
        this.bg.height = 480;
        
        //starts the physics system for the game
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //creates a variable that handles the arrow keys
        this.cursor = game.input.keyboard.createCursorKeys();
        
        this.hoop = game.add.sprite(game.world.centerX - 100, 0, 'hoop');
        this.hoop.scale.x = 0.50;
        this.hoop.scale.y = 0.50;
        game.physics.arcade.enable(this.hoop);
        this.hoop.body.immovable = true;
        this.hoop.body.velocity.x = 600;
        this.hoop.body.collideWorldBounds = true;
        this.hoop.body.bounce.x = 1;
        
        //creates a sprite with the 'logo' image at (200, 400) and assigns it to a variable
        this.mc = game.add.sprite(50, 4308, 'logo');
        this.mc.scale.x = 0.16;
        this.mc.scale.y = 0.16;
        //enables the physics system for the mc
        game.physics.arcade.enable(this.mc);
        
        //make it so the mc can't leave the screen
        this.mc.body.collideWorldBounds = true;
        
        var style = {font: '80px Arial', fill:'#FFFFFF', align: 'center'};
        this.scoring = game.add.text(100,100, score.toString(), style);
        
        this.missing = game.add.text(100,300, misses.toString(), style);
        
    },
    
    //function that is called 60 times per second
    //where we put the logic of the game
    update: function() {
        
        game.physics.arcade.collide(this.hoop, this.mc, this.hit, null, this);
        if(this.mc.y == 0){
            console.log("test");
            this.mc.x = 50;
            this.mc.y = 4308;
            isShooting = false;
            misses++;
            this.missing.text = misses;
        }

        //if the right arrow is pressed, move to the right        
        if (this.cursor.up.isDown) {
            isShooting = true;
            this.mc.body.velocity.x = 0;
            this.mc.body.velocity.y = -400;         
        }else{
            if (this.cursor.right.isDown && isShooting == false) {
                this.mc.body.velocity.x = 350;
            } else if (this.cursor.left.isDown && isShooting == false) { 
                //if the left arrow is pressed, move to the left
                this.mc.body.velocity.x = -350;
            } else { //if no arrow keys are being pressed, stop moving
                this.mc.body.velocity.x = 0;
            }
        }    
    },
    
    hit: function(hoop, mc) {
        if (mc.body.touching.up) {
            this.mc.x = 50;
            this.mc.y = 4308;
            isShooting = false;
            score++;
            this.scoring.text = score;
        }
    }
};