let keepTwo = val => {
  if (val.toString().length === 1) {
    return '0' + val
  } else {
    return val
  }
}
let timeFormat = value => {
  return keepTwo(parseInt(value / 60)) + ':' + keepTwo(parseInt(value % 60))
}
let getInteger = value => {
  return Math.floor(parseFloat(value))
}
let getDecimal = value => {
  return parseFloat(parseFloat(value) - Math.floor(parseFloat(value))).toFixed(2).substr(1)
}
export {
  timeFormat,
  getInteger,
  getDecimal
}
