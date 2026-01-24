'use strict';

const fingerprint = require('./lib/fingerprint.js');
const cuid$1 = require('./lib/cuid.js');

/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

const cuid = cuid$1(fingerprint);

module.exports = cuid;
