// Initialize Phaser, and create a 800px by 600px game
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
        
        //  Tilemaps are split into two parts: The actual map data (usually stored in a CSV or JSON file) 
        //  and the tileset/s used to render the map.

        //  Here we'll load the tilemap data. The first parameter is a unique key for the map data.

        //  The second is a URL to the JSON file the map data is stored in. This is actually optional, you can pass the JSON object as the 3rd
        //  parameter if you already have it loaded (maybe via a 3rd party source or pre-generated). In which case pass 'null' as the URL and
        //  the JSON object as the 3rd parameter.

        //  The final one tells Phaser the foramt of the map data, in this case it's a JSON file exported from the Tiled map editor.
        //  This could be Phaser.Tilemap.CSV too.   
        game.load.tilemap('area01, assets/tilemaps/maps/area01.json', null, Phaser.Tilemap.TILE_JSON);
        
        // Next we load the tileset. This is just an image, loaded in via the normal way we load images
        game.load.image('wall', 'assets/wall.png');
        
    },

    create: function() { 
        // This function is called after the preload function     
        // Here we set up the game, display sprites, etc.
        
        // Start the Aracde physics system (for movements and collisions)
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // Sets background color to blue
        game.stage.backgroundColor = '#3598db';
        
        //Add the tilemap and tileset image. The first parameter in addTilesetImage
        //is the name you gave the tilesheet when importing it into Tiled, the second
        //is the key to the asset in Phaser
        this.map = game.add.tilemap('tilemap');
        this.map.addTilesetImage('wall', 'tiles');
     
        //Add both the background and ground layers. We won't be doing anything with the
        //GroundLayer though
        this.backgroundlayer = this.map.createLayer('BackgroundLayer');
        this.groundLayer = this.map.createLayer('GroundLayer');
     
        //Before you can use the collide function you need to set what tiles can collide
        this.map.setCollisionBetween(1, 100, true, 'GroundLayer');
     
        //Change the world size to match the size of this layer
        this.groundLayer.resizeWorld();
        
        game.world.setBounds(0, 0, 1920, 1920, 'background');
    
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
        
    },

    update: function() {
        // This function is called 60 times per second    
        // It contains the game's logic
        
        // Make the player and the walls collide
        game.physics.arcade.collide(this.player, this.walls);
        
        // Make the player collide with the GroundLayer
        game.physics.arcade.collide(this.player, this.GroundLayer);
        
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