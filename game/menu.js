var menuState = {
    
    create: function() {
        // Add a background image
        game.add.image(0,0,'background');
        
        // Display the name of the game
        var nameLabel = game.add.text(game.width/2, 80, 'Phase Runner 2084', { font: '50px Arial', fill: '#ffffff'});
        nameLabel.anchor.setTo(0.5,0.5);
        
        // Show the score or time or radar at some point
        var scoreLabel = game.add.text(game.width/2, game.height/2, 'score: ' 
            + game.global.score, { font: '25px Arial', fill: '#ffffff'});
        scoreLabel.anchor.setTo(0.5,0.5);
        
        // Explain how to start the game
        var startLabel = game.add.text(game.width/2, game.height-80, 'press the up arrow key to start', {font: '25px Arial', fill: '#ffffff'});
        startLabel.anchor.setTo(0.5,0.5);
        
        // Create a new phaser keyboard variable: the up arrow key
        // When pressed, call the 'start'
        var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        upKey.onDown.add(this.start,this);
    },
    
    start: function() {
        // Start the actual game
        game.state.start('play');
    },
};

