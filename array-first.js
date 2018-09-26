var isNum = require('is-number')
var slice = require('array-slice');
module.exports = function arrayFirst(array, num) {
  if (!Array.isArray(array)) throw new Error('array-first expects an array as the first argument.');
  if (array.length === 0) {
    return null
  }
  var first = slice(array, 0, isNum(num) ? +num : 1);
  if (+num === 1 || num == null) {
    return first[0];
  }
  return first
}