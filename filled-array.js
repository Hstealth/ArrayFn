module.exports = function (filler, count) {
  let arr = []
  let res
  for (let index = 0; index < count; index++) {

    typeof filler === 'function' ? res = filler(index) : res = filler


    arr.push(res)

  }
  return arr
}