function titleCase(str) {
  // regex, regex, regex!
  return str
    .toLowerCase()
    .replace(/(?:^\w[A-Z]|\b\w)/g, (firstLetterOfWord) => {
      return firstLetterOfWord.toUpperCase()
    })
}

module.exports = titleCase

// (?:^\w|\b\w): This non-capturing group contains two alternatives:
// ^\w: Match the first word character at the beginning of the string.
// \b\w: Match any word character at a word boundary - the first character after a space
// /g: The global flag, which tells the regex engine to find all matches in the string, not just the first one.
