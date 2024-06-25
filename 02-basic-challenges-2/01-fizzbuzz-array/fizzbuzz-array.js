function fizzBuzzArrayApproach1(upToNum) {
  const arr = []

  for (let i = 1; i <= upToNum; i++) {
    let valueToPush

    if (i % 3 === 0 && i % 5 === 0) {
      valueToPush = 'FizzBuzz'
    } else if (i % 3 === 0) {
      valueToPush = 'Fizz'
    } else if (i % 5 === 0) {
      valueToPush = 'Buzz'
    } else {
      valueToPush = i
    }
    // 2 % operations, 3 conditional checks, O(n)

    arr.push(valueToPush)
  }

  return arr
}

function fizzBuzzArrayApproach2(upToNum) {
  const arr = []

  for (let i = 1; i <= upToNum; i++) {
    let valueToPush = ''

    // refactored approach 2
    const divisibleBy3 = i % 3 === 0
    const divisibleBy5 = i % 5 === 0

    if (!divisibleBy3 && !divisibleBy5) valueToPush = i
    if (divisibleBy3) valueToPush = 'Fizz'
    if (divisibleBy5) valueToPush += 'Buzz'
    // 2 % operations, up to 3 conditional checks, string concatenation, O(n)

    arr.push(valueToPush)
  }

  return arr
}

// Approach 1: 2 % operations, 3 conditional checks, O(n)
// Approach 2: 2 % operations, up to 3 conditional checks, string concatenation, O(n)
// 🏆 Approach 1 wins due to easier readability & doesn't have string concatenation according to ChatGPT 🤷‍♂️
module.exports = fizzBuzzArrayApproach1
