const sentence = 'Ronaldo is the best football player in the world. He has won many awards and is loved by fans all over the world.';

// 1. replace the first word Ronaldo  with Messi
// hint : use the replace() method
const updatedSentence1 = sentence.replace('Ronaldo', 'Messi')
console.log(updatedSentence1)


//2. Convert the entire sentence to uppercase letters
const upperCaseSentence = sentence.toUpperCase()
console.log(upperCaseSentence)



//3. replace all the word the with 'd'
//expected output is 'Ronaldo is d best football player in d world. He has won many awards and is loved by fans all over d world.' 
const updateSentence1 = sentence.replace(/the/g, 'd')
console.log(updateSentence1)