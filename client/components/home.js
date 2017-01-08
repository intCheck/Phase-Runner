const m = require('mithril');
const request = require('superagent');
const Req = require('../models/requests');

//Main Request Example controller
const Home = module.exports;
Home.controller = function () {
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
Home.view = function (ctrl, options) {

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
    m('h3', 'Welcome to the Campaign Manager'),
    m('p', 'To test the different server routes, simply enter in the route and click the button')
  ])
};

// This is the mithril verison of the the input field.
// notice how it references the ctrl.response() prop getter/setter.
// Initially, the ctrl.response() will evaluate to an empty string, but
// after the GET/POST request that is setup, that value will change.
// this.value refers to the input field itself. So this.value is the value inside the input box
// we are also passing the ctrl into this function, because we want access to the controller functions and props.
const field = function(ctrl) {
  return m('div', [
    m('a', 'http:/localhost:1337/'),
    m('input', {
      type: 'text',
      style: {
        width: "100px"
      },
      oninput: function(e) {
      placeholder: "url",
        e.preventDefault();
        ctrl.url(this.value); }
    }),
    m('br'),
    m('br'),
    m('a', 'Response from server: ' + ctrl.response())
  ])
};

// This is a div with 2 buttons. The buttons have an onclick function, that runs a function
// defined in the controller which either runs a GET request, or a POST request.
// by calling the function ctrl.url(), the getter/setter function, it will get the value stored in ctrl.url.
// So by the way jabascript runs, ctrl.url will run first, giving the url entered in the input box, and then
// will make a GET/POST request with the url.
const buttons = function(ctrl) {
  return m('div', [
    m('button', {
      style: {
        width: "100px"
      },
      type: 'submit',
      onclick: function(e){
        e.preventDefault();
        ctrl.getReq(ctrl.url());
      }}, 'GET'),
    m('button', {
      type: 'submit',
      style: {
        width: "100px"
      },
      onclick: function(e){
        e.preventDefault();
        ctrl.postReq(ctrl.url());
      }}, 'POST'),
    m('button', {
      type: 'submit',
      style: {
        width: "100px"
      },
      onclick: function(e){
        e.preventDefault();
        ctrl.putReq(ctrl.url());
      }}, 'PUT'),
    m('button', {
      type: 'submit',
      style: {
        width: "100px"
      },
      onclick: function(e){
        e.preventDefault();
        ctrl.delReq(ctrl.url());
      }}, 'DELETE'),
  ])
};
