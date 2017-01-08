'use strict';

function generateUserRoutes(server) {

  server.get('/users', function(req, res) {
    console.log('REQ: ', req.params);
    res.send('.=^.^= Got Some Users! =^.^=.');
    console.log('got some users!');

  });

  server.get('/users/:id', function(req, res) {
    console.log('REQ: ', req.params);
    res.send('.=^.^= Get a user by its ID =^.^=.');
    console.log('Get a user by its ID');

  })

  server.post('/users', function(req, res) {
    res.send('.=^.^= Creating User! =^.^=.');
    console.log('.=^.^= Creating User! =^.^=.');

  });

  server.put('/users/:id', function(req, res) {
    console.log('REQ: ', req.params);
    res.send('.=^.^= Updated user by ID! =^.^=.')
    console.log('Updated user by ID!');

  });

  server.delete('/users/:id', function(req, res) {
    console.log('REQ: ', req.params);
    res.send('.=^.^= Deleted a user by ID! =^.^=.');
    console.log('Deleted a user by ID!');

  });


};

module.exports = generateUserRoutes;
