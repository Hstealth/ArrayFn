let sortMethod = require('./sort')
let arrayFirst = require('./array-first')
let arrayLast = require('./array-last')
let arrayFlatten = require('./arr-flatten')
let dedupe = require('./dedupe')
let arrayRange = require('./array-range')
let arrDiff = require('./array-diff')
let filledArray = require('./filled-array')
let mapArray = require('./map-array')
let inArray = require('./in-array')
var remove = require('./unordered-array-remove')
var Swap = require('./swap-array')
var arrayChunk = require('./array.chunk')
// let flag = sortMethod([1,3])
// let arr = arrayFirst([1,2,3],3)
// console.log(arr)
// console.log(flag)
// let arr = arrayLast([1, 2, 3], 1)
// let arr = arrayFlatten([1,2,[3,4],[2,[2,3,4,[234,56,78]]]])
// let arr = dedupe([1, 2, 3, 2, 2, 3])
// let arr = arrayRange(4)
// let arr = arrDiff([1,2,3],[1,2])
// let arr = filledArray(i => {
//   return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
// }, 15)
const obj = {
  giorgio: 'Bianchi',
  gino: 'Rossi'
};
// console.log(inArray(['a', 'b', 'c'], 'cd '));
// let arr = [1,2,3,4,5]
// remove(arr, 1)
// console.log(mapArray(obj, (key, value) => key + ' ' + value));
// console.log(Swap([1, 2, 34, 5, 6], 2, 3))
console.log(arrayChunk([1,2,3,4,5,6],1))