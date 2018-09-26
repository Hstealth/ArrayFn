function flat(arr, res) {
  var index = 0, cur
  var len = arr.length
  for (; index < arr.length; index++) {
    cur = arr[index]
    Array.isArray(cur) ? flat(cur, res) : res.push(cur)
  }
  return res
}
module.exports = (arr) => {
  return flat(arr, [])
}