var loadState = {
    
    preload: function() {
        // Add a 'loading...' label on the screen
        var loadingLabel = game.add.text(game.width/2,150,'loading...',{font: '30px Arial',fill: '#ffffff'});
        loadingLabel.anchor.setTo(0.5,0.5);
        
        // Display the progress bar
        var progressBar = game.add.sprite(game.width/2,200,'progressBar');
        progressBar.anchor.setTo(0.5,0.5);
        game.load.setPreloadSprite(progressBar);
        
        // Load all the assets
        game.load.spritesheet('player', 'assets/player2.png', 20, 20);
        game.load.image('coin','assets/coin.png');
        game.load.image('enemy','assets/enemy.png');
        game.load.image('background', 'assets/background.png');
        game.load.image('pixel', 'assets/pixel.png');
        game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
        game.load.image('jumpButton', 'assets/jumpButton.png');
        game.load.image('rightButton', 'assets/rightButton.png');
        game.load.image('leftButton', 'assets/leftButton.png');
        
        // Tileset assets
        game.load.image('tileset','assets/tileset.png');
        game.load.tilemap('map','assets/map.json', null, Phaser.Tilemap.TILED_JSON);
        
        // Load a new asset that we will use in the menu state
        game.load.image('background','assets/background.png');
        
        // Sound when the player jumps
        game.load.audio('jump', ['assets/jump.mp3']);
        game.load.audio('coin', ['assets/coin.mp3']);
        game.load.audio('dead', ['assets/dead.mp3']);
        
    },
    
    create: function() {
        // Go to the menu state
        game.state.start('menu');
        
    }
    
};