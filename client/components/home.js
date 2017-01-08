const m = require('mithril');
const request = require('superagent');
const Req = require('../models/requests');

//Main Request Example controller
const Overlay = module.exports;
Overlay.controller = function () {
  var ctrl = this;

  // m.prop() is a getter/setter function. It allows you to set properties like a function, and
  // get properties.
  ctrl.url = m.prop(null);
  ctrl.response = m.prop('');

  // right now if we called ctrl.url(), it would equal null.

  // This function is defined in the controller. any functions that we want to call in the view, we must
  // define up here. For modularity's sake, i have put the functions for Requests in a clients/models folder.
  // the Req.getRequest function does just what you would think it does.
  // We pass in the url because we want the function to know where we are making a GET request
  ctrl.getReq = function (url) {
    // start computation is a mythril thing. It has a counter that starts at 0.
    // For every m.startComputation(), it adds one. for every m.endComputation, it subracts one.
    // one it gets to 0, it re-renders the screen, in this case, giving updated values that are returned
    // from the getter/setter functions.
    m.startComputation();

    // Creates a new promise. Our app is now asynchronous due to the nature of API's.
    // We use promises to help deal with that. the resolve takes the promise and gets it's value.
    // returning that will be passed into the .then function, where the getter/setter is called on the response.
    return new Promise(function(resolve, reject) {
      return resolve(Req.getRequest(url))
    })
    .then(function(response) {
      console.log('Response', response.text);
      ctrl.response(response.text);
      m.endComputation();
    })
    .catch(function(error) {
      ctrl.response(error.message);
    })

  }
  // Similar as to the above function, only this time we have the option to send data.
  // Oh yeah, its also a POST request instead.
  ctrl.postReq = function(url, data) {
    m.startComputation();

    return new Promise(function(resolve, reject) {
      return resolve(Req.postRequest(url))
    })
    .then(function(response) {
      console.log('RESPONSE!', response);
      ctrl.response(response.text);
      m.endComputation();
    })
    .catch(function(error) {
      ctrl.response(error.message);
    })
  }

    ctrl.putReq = function(url, data) {
    m.startComputation();

    return new Promise(function(resolve, reject) {
      return resolve(Req.putRequest(url))
    })
    .then(function(response) {
      console.log('RESPONSE!', response);
      ctrl.response(response.text);
      m.endComputation();
    })
    .catch(function(error) {
      ctrl.response(error.message);
    })

  }

    ctrl.delReq = function(url, data) {
    m.startComputation();

    return new Promise(function(resolve, reject) {
      return resolve(Req.delRequest(url))
    })
    .then(function(response) {
      console.log('RESPONSE!', response);
      ctrl.response(response.text);
      m.endComputation();
    })
    .catch(function(error) {
      ctrl.response(error.message);
    })

  }
}

//Main view composed of all sub views in desired order of appearance.
// Notice how child elements in that div are in an array.
// This way, it makes it easy to add to the array and keeps the order clean.
// We will define our view components down below
Overlay.view = function (ctrl, options) {

    var view = m('div', [
      header(ctrl),
      field(ctrl),
      buttons(ctrl)
    ]);

  return view;
}


// These are our view components. They are mithril functions. Mithril has a great way of turning javascript into
// hmtl. notice how line 1 is really just <h3>'Welcome to the Campaign Manager'</h3> in html.
// It gets more complex as we go along, but the patter remains the same.
// m('<html element>', [<array of children elements optional>], {<object of options>} )
// common pitfalls:
//    1: forgetting to put commas in between array items.
//    2: not checking your terminal to see what the error messages are. Learning to trace the
//       call stack is essential. Most of the time, it's just syntax.
//    3: refresh the page
const header = function() {
  return m('div', [
    m('h3', 'PHASER')
  ])
};


