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
    m('nav.navbar.navbar-default', {
      style:{
      position: 'fixed',
      top: '10px',
      left: '50%',
      marginLeft: '-37.5%',
      backgroundColor: 'rgba(30,32,30, .4)',
      outline:'5px inset rgba(89,89,89, .4)',
      border:'5px ridge rgba(105, 115, 105, .4)',
      width: '80%',
      }
    }, [
      m('div.container-fluid', [
        m('div.navbar-header', {
          style: {
            width: '100%',
            height: '70px',
          }
        }, [
          m('h1', {
            style: {
              marginBottom: '50%',
              display: 'block',
              textAlign: 'center',
              textWeight: 'bold',
              fontFamily: 'Papyrus, fantasy',
              color: '#EFFBFF'
            }
          }, 'Phase Runner')
          ])
        ])
      ])
  ])
};


