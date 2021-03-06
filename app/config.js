'use strict';

var env = process.env.NODE_ENV || 'dev';
console.log('Env: ', env);

module.exports = {
  dev: {
    apiUrl: 'http://localhost:3000'
  },
  production: {
    apiUrl: 'https://thecouncil.herokuapp.com'
  }
}[env];
