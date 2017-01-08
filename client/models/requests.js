const m = require('mithril');
const request = require('superagent');
const Req = {};
const host = 'http://localhost:1337/';

// A basic formula for a get request
Req.getRequest = url => {
  return new Promise(function(resolve, reject){
    request
      .get(host + url)
      .then( response => {
        console.log('response', response);
        resolve(response);
      })
      .catch( error => {
        reject(error)
       console.log('Got an error:', error )
      })
  })
};

// A basic post formula
Req.postRequest = (url, data) => {
  return new Promise(function(resolve, reject){
    request
      .post(url)
      .send(data)
      .then( response => {
        resolve(response);
      console.log('Got a response for server');
    })
    .catch( error => {
      reject(error)
      console.log('Got an error:', error )
    })
  })
};

// A basic put formula
Req.putRequest = (url, data) => {
  return new Promise(function(resolve, reject) {
    request
    .put(url)
    .send({id: data})
    .set('Accept', 'application/json')
    .then( response => {
      resolve(response)
      console.log('response', response);
      console.log('Got a response for server');
    })
    .catch( error => {
      reject(error)
      console.log('Got an error:', error )
    })
  })
};

// A basic delete formula
Req.delRequest = (url, data) => {
  return new Promise(function(resolve, reject) {
    request
    .delete(url)
    .send({id: data})
    .set('Accept', 'application/json')
    .then( response => {
      resolve(response)
      console.log('response', response);
      console.log('Got a response for server');
    })
    .catch( error => {
      reject(error)
      console.log('Got an error:', error )
    })
  })
};

module.exports = Req;
