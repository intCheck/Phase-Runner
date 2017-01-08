// Initialize Phaser, and create a 500px by 200px game
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser platformer,');

// Create our 'mainState' state that will contain the game
var mainState = {
    preload: function() { 
        // This function will be executed at the beginning     
        // That's where we load the images and sounds 
        
        game.load.image('player', 'assets/player.png');
        game.load.image('coin', 'assets/coin.png');
        game.load.image('wall', 'assets/wall.png');
        game.load.image('enemy', 'assets/enemy.png');
        
    },

    create: function() { 
        // This function is called after the preload function     
        // Here we set up the game, display sprites, etc. 
        
        // Sets background color to blue
        game.stage.backgroundColor = '#3598db';
        
        game.world.setBounds(0, 0, 1920, 1920, 'background');
        
        // Start the Aracde physics system (for movements and collisions)
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // Add the physics engine to all game objects
        game.world.enableBody = true;
        
        // Variable to store the arrow key pressed
        this.cursor = game.input.keyboard.createCursorKeys();
        
        // Create the player in the middle of the game
        this.player = game.add.sprite(70, 100, 'player');
        
        // Add gravity to make it fall
        this.player.body.gravity.y = 300;
        
        this.walls = game.add.group();
        this.coins = game.add.group();
        this.enemies = game.add.group();
        
        game.camera.follow(this.player);
        
        // Design the level x = wall o = coin, ! = lava
        var level = [
            '                                                                   ',
            '!         !                                                        ',
            '!                 o                                                ',
            '!         o    xxxxxxxxxxx      xxxxxxxx                           ',
            '!                                                                  ',
            '!     o                                                            ',
            'xxxxxxxxxxxxxxxx     xxxxxxxxxxxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            '               xooooox          xoooox                             ',
        ];
        
        // Create the level by going through array
        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {
                
                // Create a wall and add it to the 'walls' group
                if (level[i][j] == 'x') {
                    var wall = game.add.sprite(25+25*j, 25+25*i, 'wall');
                    this.walls.add(wall);
                    wall.body.immovable = true;
                }
                
                // Create a coin and add it to the 'coins' group
                else if (level[i][j] == 'o') {
                    var coin = game.add.sprite(25+25*j, 25+25*i, 'coin');
                    this.coins.add(coin);
                }
                
                // Create a enemy and add it to the 'enemies' group
                else if (level[i][j] == '!') {
                    var enemy = game.add.sprite(25+25*j, 25+25*i, 'enemy');
                    this.enemies.add(enemy);
                }
            }
        }
        
    },

    update: function() {
        // This function is called 60 times per second    
        // It contains the game's logic
        
        // Make the player and the walls collide
        game.physics.arcade.collide(this.player, this.walls);
        
        // Call the 'takeCoin' function when the plyaer takes a coin
        game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);
        
        // Call the 'restart' function when the player touches the enemy
        game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);
        
        if (this.cursor.left.isDown) {
            this.player.body.velocity.x = -200;    
        }else if (this.cursor.right.isDown) {
            this.player.body.velocity.x = 200;
        } else { 
            this.player.body.velocity.x = 0;
        };
    
        //  Allow the player to jump if they are touching the ground.
        if(this.cursor.up.isDown && (this.player.body.onFloor() || this.player.body.touching.down)) {    
            this.player.body.velocity.y = -250
        };
    },
    
    takeCoin: function(player, coin) {
        coin.kill();
    },
    
    restart: function() {
        game.state.start('main');
    },
};

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState); 

// Start the state to actually start the game
game.state.start('main');