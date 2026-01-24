'use strict';

const pad = require('./pad.js');

var globalCount = Object.keys(global);
var clientId = pad(globalCount.toString(36), 4);

function fingerprint () {
  return clientId;
}

module.exports = fingerprint;
