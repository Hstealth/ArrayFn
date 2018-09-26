module.exports = (start, end) => {
  var n1 = typeof start === 'number',
    n2 = typeof end === 'number'
  if (n1 && !n2) {
    end = start
    start = 0
  } else if (!n1 && !n2) {
    end = start = 0
  }
  start = start | 0
  end = end | 0
  let len = end - start
  if (len < 0) {
    throw new Error('arr length must be positive')
  }
  let i = 0
  let arr = new Array(len)
  while (len--) {
    arr[i] = start++
    i++
  }
  return  arr 
}