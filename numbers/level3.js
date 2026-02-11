// Q1. Generate a random number between 0 and 1 using JavaScript
let a =Math.random()
console.log("Q1 Answer:" , a);

// Q2. Generate a random whole number between 1 and 10
let b=Math.floor((Math.random()*10));
console.log("Q2 Answer:",b);

// Q3. Round the number 5.67 to:
//     a) nearest integer
        console.log(Math.round(5.67));
       
        

//     b) round down
        console.log(Math.floor(5.67));
//     c) round up
         console.log(Math.ceil(5.67));

// Q4. Convert the string "45.89" into a number and remove decimal part
let number=Number(parseInt(45.89));
console.log("Q4 Answer:", number);
console.log(typeof(number));


// Q5. Check whether a variable value is an integer or not
let S=3.4;
console.log(Number.isInteger(S));

// Q6. Find the maximum number from: 10, 45, 2, 99, 23
let P=Math.max(10,45,2,99,23);
console.log(P);
// Q7. Find the minimum number from: -5, -10, 0, 3, 8
console.log(Math.min(-5,-10,0, 3,8));
// Q8. Format the number 1234.56789 to 2 decimal places
let Q=1234.56789
let R=Q.toFixed(2);
console.log(R);
