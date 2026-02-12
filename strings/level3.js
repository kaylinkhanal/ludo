/*Q1: The Space Remover const greeting = " Hello World "; The variable above has extra spaces at the start and end. 
Use a method to remove those spaces so the output is just "Hello World".*/
const gretting = "hello world"
const newgretting = gretting.trim()
console.log(newgretting)


/*Q2: The "Includes" Test const hobby = "I love coding with JavaScript"; 
Write a line of code to check if the word "coding" exists inside the hobby string. (It should return true).*/
const hobby = "I love coding with JavaScript"
console.log(hobby.includes('coding'))



/*Q3: The Character Finder const city = "Kathmandu"; Find out what the first letter of the city is using its index. 
Hint: In programming, we start counting at 0!*/
const city = "Kathmandu"
firstletter = city[0];
console.log(firstletter)