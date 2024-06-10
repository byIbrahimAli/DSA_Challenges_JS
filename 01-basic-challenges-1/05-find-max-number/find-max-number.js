function findMaxNumber(arr) {
  // cheating
  // return Math.max(...arr)

  // errrror handler
  if (arr.length === 0)
    throw new Error(
      "Hmm. Looks like you've asked me to find the max item within a collection of nothing.. what the heck?!"
    )

  // brute force
  let maxNumber = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i]
    }
  }

  return maxNumber
}

module.exports = findMaxNumber
