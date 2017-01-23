var menuState = {
    
    create: function() {
        // Add a background image
        game.add.image(0,0,'background');
        
        if(!localStorage.getItem('bestScore')) {
            localStorage.setItem('bestScore', 0);
        }
        
        if(game.global.score > localStorage.getItem('bestScore')) {
            localStorage.setItem('bestScore', game.global.score);
        }
        
        // Display the name of the game
        var nameLabel = game.add.text(game.width/2, 80, 'Phase Runner 2049', { font: '50px Arial', fill: '#ffffff'});
        nameLabel.anchor.setTo(0.5,0.5);
        game.add.tween(nameLabel).to({y:80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
        
        var text = 'score: ' + game.global.score + '\nbest score: ' + 
            localStorage.getItem('bestScore');
        
        // Show the score or time or radar at some point
        var scoreLabel = game.add.text(game.width/2, game.height/2, 'score: ' 
            + game.global.score, { font: '25px Arial', fill: '#ffffff'});
        scoreLabel.anchor.setTo(0.5,0.5);
        
        var text;
        if(game.device.desktop) {
            text = 'press the up arrow key to start';
        } else {
            text = 'touch screen to start';
        }
        
        // Explain how to start the game
        var startLabel = game.add.text(game.width/2, game.height-80, 'press the up arrow key to start', {font: '25px Arial', fill: '#ffffff'});
        startLabel.anchor.setTo(0.5,0.5);
        game.add.tween(startLabel).to({angle: -2},500).to({angle:2},1000).to({angle:0},500).loop().start();
        
        // Create a new phaser keyboard variable: the up arrow key
        // When pressed, call the 'start'
        var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        upKey.onDown.add(this.start, this);
        if(!game.device.desktop) {
            game.input.onDown.add(this.start, this);
        }
        
        this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);
        this.muteButton.frame = game.sound.mute ? 1 : 0;
    
    },
    
    toggleSound: function() {
        game.sound.mute = !game.sound.mute ? 1 : 0;
    },
    
    start: function() {
        
        if(!game.device.desktop && game.input.y < 50 && game.input.x < 60) {
            return;
        }
        
        // Start the actual game
        this.game.state.start('play');
    },
};

