'use strict';
// Dependancies
const express = require('express');
const chalk = require('chalk');
const browserify = require('browserify-middleware')
var Path = require('path')
/*
* Server configurations
*/
const port = process.env.PORT || 1337;

const serverOptions = {
  name: 'Phaser',
  version: '1.0.0'
};


/*********************\
* CLIENT SIDE ROUTING *
**********************/
const routes = express.Router();
// Provide a browserified file at a specified path
routes.use('/app-bundle.js', browserify('./client/app.js'));

// Static assets (html, etc.)
const assetFolder = Path.resolve(__dirname, './client/public')
routes.use(express.static(assetFolder))


/*********************\
* SERVER SIDE ROUTING *
**********************/
const app = express(serverOptions);

const generateGameRoutes = require('./routes/game');
generateGameRoutes(app);


app.use('/', routes)


/**
* Default Route to test our app
*/

app.use(function(req, res, next) {
  console.log(req.method + '' + req.url)
});


app.listen(port, function () {
  console.log(chalk.green(' Game Running on port: ' + port ));
});

