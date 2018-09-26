module.exports = function (arr)  {
  var len = arguments.length;
  let i = 0
  while (++i < len) {
    arr = diffArray(arr, arguments[i])
  }
  return arr
}
function diffArray(one, two) {
  if (!Array.isArray(two)) {
    return one.slice()
  }
  let olen = one.length
  let tlen = two.length
  let i = -1;
  let arr = []
  while (++i < olen) {
    let flag = false
    let ele = one[i]
    for (let index = 0; index < tlen; index++) {
      const element = two[index];
      if (ele === element) {
        flag = true
        break
      }
    }
    if (flag === false) {
      arr.push(ele)
    }
  }
  return arr
}