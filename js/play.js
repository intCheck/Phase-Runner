// new name for the state
var playState = {
    
    // Removed the preload function
    
    create: function() {
        
        // Removed background color, physics system, and roundPixels
        
        // Then everything is the same, except at the end
        
        // replace 'var score = 0' by this
        game.global.score = 0;
            
    },
    
    update: function() {
        
        // no changes
            
    },
    
    movePlayer: function() {
        
        // no changes
            
    },
    
    takeCoin: function() {
        
        // Use the new score variable
        game.global.score += 5;
        
        // Use the new score variable
        this.scoreLabel.text = 'score: ' + game.global.score;
        
        // no changes
    },
    
    updateCoinPosition: function() {
        // no changes
    },
    
    addEnemy: function() {
        // no changes
    },
    
    createWorld: function() {
        
    },
    
    playerDie: function() {
        // When the player dies, we go to the menu
        game.state.start('menu');
    }
    
};