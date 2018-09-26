
module.exports = function (arr, val) {
  arr = arr || []
  let i = 0;
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (val === arr[i]) {
      return true
    }
  }
  return false
}