// brute force
function countVowels(str) {
  let count = 0

  for (const character of str) {
    if (isVowel(character)) count++
  }

  return count
}

const isVowel = (char) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === char.toLowerCase()) return true
  }

  return false
}

// ✋🛑 brute force is 🐌
// loop: O(n) where n is no of vowels
// set: O(1) cos of hash-based lookups
function countVowelsSpeed(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let count = 0

  for (const character of str) {
    if (vowels.has(character.toLowerCase())) count++
    // .has() is way faster than looping through vowels O(1) > O(n)
  }

  return count
}

module.exports = countVowelsSpeed
