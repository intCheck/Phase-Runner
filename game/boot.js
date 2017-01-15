var bootState = {
    
    preload: function() {
        // Load the image
        game.load.image('progressBar', 'assets/progressBar.png');    
        
    },
    
    create: function() {
        // Set some game settings
        game.stage.backgroundColor = '#3498db';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.renderer.renderSession.roundPixels = true;
        
        // starts the load state in load.js
        game.state.start('load');
    }
    
};