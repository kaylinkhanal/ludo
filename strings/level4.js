const fruits = "Apple, Banana, Mango, Orange";
const price = 5;
//Q1: Convert the fruits string into an Array so that each fruit is its own item.

       // Expected output: ["Apple", "Banana", "Mango", "Orange"]

        //Hint: Use the .split(", ") method.
const fruitsArray = fruits.split(", ")
console.log(fruitsArray)

    //Q2: Using Template Literals (the backticks `), create a sentence that says: "The price of one Apple is $5".

        //Hint: Use ${} to insert the first fruit from your array and the price variable.
const sentence = `The price of one ${fruitsArray[0]} is $${price}`
console.log(sentence)

    //Q3: Take your fruit array and turn it back into a single string, but use a hyphen (-) instead of a comma to separate them.

       // Expected output: "Apple-Banana-Mango-Orange"

        //Hint: Use the .join("-") method.
const fruitsString = fruitsArray.join("-")
console.log(fruitsString)