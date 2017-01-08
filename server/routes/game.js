'use strict';

function generateGameRoutes(server) {

  server.get('/game', function(req, res) {
    console.log('REQ: ', req.params);
    res.send('server game');
    console.log('server game (not really, but someday)');

  });
};

module.exports = generateGameRoutes;
