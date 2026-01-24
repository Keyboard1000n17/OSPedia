import pad from './pad.mjs';

var env = typeof window === 'object' ? window : self;
var globalCount = 0;
for (var prop in env) {
  if (Object.hasOwnProperty.call(env, prop)) globalCount++;
}
var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
var clientId = pad((mimeTypesLength +
  navigator.userAgent.length).toString(36) +
  globalCount.toString(36), 4);

export default function fingerprint () {
  return clientId;
}
