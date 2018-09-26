function defaultComparator(a, b) {
  return a - b
}
module.exports = function checksort(array, comparator) {
  if (!Array.isArray(array)) throw TypeError('Expected Array,is got' + (typeof array))
  comparator = comparator || defaultComparator
  for (var i = 1, length = array.length; i < length; i++) {
    if (comparator(array[i - 1], array[i]) > 0) return false
  }
  return true
} 