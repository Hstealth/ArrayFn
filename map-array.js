module.exports = function (obj, callback) {
  let arrKey = Object.keys(obj)
  let arr = []
  arrKey.forEach(item => {
    arr.push(callback(item, obj[item]))

  });
  return arr
}