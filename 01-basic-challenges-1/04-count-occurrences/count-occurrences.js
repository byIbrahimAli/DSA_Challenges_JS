function countOccurrences(str, char) {
  // ------ attempt 1 ------
  // let count = 0

  // for (const character of str) {
  //   character === char && count++
  // }

  // return count

  // ------ attempt 2 ------
  return str.split(char).length - 1
  // str.split(char) splits string into an array of substrings seperated by char
  // .length gives number of parts string was split into
  // -1 gives number of occurences of char
  // For the string "hello" and the character "l", str.split("l") would result in ["he", "", "o"], which has a length of 3. The number of occurrences of "l" is length - 1, which is 3 - 1 = 2.
  // For the string "banana" and the character "a", str.split("a") would result in ["b", "n", "n", ""], which has a length of 4. The number of occurrences of "a" is length - 1, which is 4 - 1 = 3.
}

module.exports = countOccurrences
