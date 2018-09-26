module.exports = function (arr, target1, target2) {
  if (!Array.isArray(arr)) throw new Error('first params is must Array')
  let one = arr[target1]
  let two = arr[target2]
  console.log(arr, target1)
  arr[target1] = two
  arr[target2] = one
  return arr
}  