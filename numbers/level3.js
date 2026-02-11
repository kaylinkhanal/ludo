//Q1: Given const price = 19.99, use a method to round it to the nearest whole integer.
const price = 19.99
console.log(Math.round(price))

//Q2: Given const points = 12.2, use a method to round it up to the next whole integer (13).
const points = 12.2
console.log(Math.ceil(points))

//Q3: Create a variable called randomNum and assign it a random decimal between 0 and 1.
const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min
}
const randomNum = getRandomNumber(0, 10)

console.log(randomNum.toFixed(2))


//Q4: Use a method to find the minimum value between these three numbers: 10, 5, and 20.
const minValue = Math.min(10, 5, 20)
console.log(minValue)
