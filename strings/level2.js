const sentence = 'Ronaldo is the best football player in the world. He has won many awards and is loved by fans all over the world.';

// 1. replace the first word Ronaldo  with Messi
// hint : use the replace() method
const newsentence=sentence.replace('Ronaldo','messi');
console.log(newsentence);


//2. Convert the entire sentence to uppercase letters
const uppercase=sentence.toUpperCase()
console.log(uppercase)


//3. replace all the word the with 'd'
//expected output is 'Ronaldo is d best football player in d world. He has won many awards and is loved by fans all over d world.' 
let result=sentence.replace('the','d');
console.log(result);