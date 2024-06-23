function removeDuplicatesForLoop(arr) {
  let newArr = []

  for (item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item)
    }
  }

  return newArr
}

function removeDuplicatesSet(arr) {
  return [...new Set(arr)]
}

module.exports = removeDuplicatesForLoop
