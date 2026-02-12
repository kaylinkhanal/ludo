const sentence = 'Ronaldo is the best football player in the world. He has won many awards and is loved by fans all over the world.';

// 1. replace the first word Ronaldo  with Messi
// hint : use the replace() method
let output = sentence.replace('Ronaldo','messi')
console.log(output)

//2. Convert the entire sentence to uppercase letters
const newsentence = sentence.toUpperCase();
console.log(newsentence)


//3. replace all the word the with 'd'
//expected output is 'Ronaldo is d best football player in d world. He has won many awards and is loved by fans all over d world.' 
let newoutput = sentence.replaceAll('the','d')
console.log(newoutput)