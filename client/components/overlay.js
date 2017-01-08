const m = require('mithril');
const request = require('superagent');
const Req = require('../models/requests');

//Main Request Example controller
const Overlay = module.exports;
Overlay.controller = function () {
  var ctrl = this;

  ctrl.url = m.prop(null);
  ctrl.response = m.prop('');

  ctrl.getReq = function (url) {
    m.startComputation();

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

Overlay.view = function (ctrl, options) {

    var view = m('div', [
      header(ctrl)
    ]);

  return view;
}

const header = function() {
  return m('div', [
    m('h3', 'PHASER')
  ])
};


