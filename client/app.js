const m = require('mithril')

// Global variable for global state (e.g. currentUser)
window.App = {}

/*
* Client-side routing
*/

//sets the type of route to hash. e.i. localhost:1337/#/home
m.route.mode = "hash"
// m.route.mode = 'pathname'

m.route(document.getElementById('app'), "/", {
    "/": require('./components/home')
});

