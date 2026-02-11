//Q1: Given const total = "45.67px", extract only the number 45.67 and assign it to a variable.
const total = "45.67px"
const numberOnly = parseFloat(total)
console.log(numberOnly)

//Q2: Given const input = "Apple", use a method to check if this variable is NaN (Not a Number).
const input = "Apple"
const isNotANumber = isNaN(input)
console.log(isNotANumber)


//Q3: Given const balance = 1500.4, format it to a string with exactly two decimal places (e.g., "1500.40").
const balance = 1500.4
const formattedBalance = balance.toFixed(2)
console.log(formattedBalance)

//Q4: Convert the number 255 into a string.
const number = 255
const string = number.toString()
console.log(string)