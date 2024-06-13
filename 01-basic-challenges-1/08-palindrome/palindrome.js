const isPalindrome = (str) => sanitiseString(str) === reverseString(str) // str and reverse(str) the same ? T : F

const reverseString = (str) => sanitiseString(str.split('').reverse().join('')) // reverse sanitised string

const sanitiseString = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '') // lowercase, chars and numbers only - no spaces, symbols

module.exports = isPalindrome
