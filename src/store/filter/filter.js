let getInteger = value => {
  return Math.floor(parseFloat(value))
}
let getDecimal = value => {
  return parseFloat(parseFloat(value) - Math.floor(parseFloat(value))).toFixed(2).substr(1)
}
export {
  getInteger,
  getDecimal
}
