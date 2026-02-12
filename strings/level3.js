// =======================
// 🔹 LEVEL 3
// =======================

const text = "JavaScript is very powerful and flexible.";

// Q1. Print the position of the word "powerful"
console.log(text.indexOf("powerful"));



// Q2. Check if the sentence includes the word "flexible" (should return true/false)

console.log(text.includes("flexible"));



// Q3. Extract the word "very"
console.log(text.slice(14,18));

// Q4. Split the sentence into an array of words
let arr=text.split(' ');
console.log(arr);

// Q5. Print the last character of the string
console.log(text.charAt(text.length-1));