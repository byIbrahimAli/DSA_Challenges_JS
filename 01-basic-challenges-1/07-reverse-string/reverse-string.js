function reverseString(str) {
  // my way
  let reverseStr = str[str.length - 1]

  for (let i = str.length - 2; i >= 0; i--) {
    reverseStr += str[i]
  }

  return reverseStr

  // one liner
  // return str.split('').reverse().join('');
  // array split by each char
  // array.reverse()
  // convert array to string
}

module.exports = reverseString
