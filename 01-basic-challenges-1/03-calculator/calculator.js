function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    default:
      throw new Error(
        `You've passed an invalid operator of ${operator}, I only accept +, -, *, or /.`
      )
  }
}

module.exports = calculator
