// Q1. Generate a random number between 50 and 100 (inclusive)
console.log(Math.floor(Math.random()*(100-50))+50);
// Q2. Write logic to check if a number is even or odd
function checkEvenOrOdd(number){
    if (number%2==0){
        return 'even'
    }else{
        return 'odd'
    }
}
console.log(checkEvenOrOdd(4));
// Q3. Write a program to reverse a number (Example: 1234 → 4321)
let number=1234;
let result=number.toString().split('').reverse().join('');
console.log(result);
// Q4. Count how many digits are in a number

// Q5. Check if a number is a palindrome (Example: 121 → true)

// Q6. Write a program to check if a number is prime

// Q7. Calculate the power of a number (Example: 2^5)

// Q8. Write a function that takes a number and returns the sum of its digits
//      Example: 123 → 1 + 2 + 3 = 6
