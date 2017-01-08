'use strict';

function generateGameRoutes(server) {

  server.get('/game', function(req, res) {
    console.log('REQ: ', req.params);
    res.send('serve up a game');
  });
};

module.exports = generateGameRoutes;
