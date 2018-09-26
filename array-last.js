const isNumber = require('is-number')
module.exports = function last(array, n) {
  if (!Array.isArray(array)) {
    throw new Error('expected the first argument to be an array')
  }
  let len = array.length
  if (len === 0) {
    return null
  }
  n = isNumber(n) ? +n : 1
  if (n === 1) {
    return array[len - 1]
  }
  var arr = new Array(n)
  while (n--) {
    arr[n] = array[--len]
  }
  return arr
}