const hobby = "   I love learning JavaScript because it is powerful!   ";
//Q1: The string has extra spaces at the start and end. Clean it up so it becomes "I love learning JavaScript because it is powerful!".

   // Hint: Use the .trim() method.
   const Hobby = hobby.trim()
   console.log(Hobby)

//Q2: Check if the string ends with the word "powerful!". Your output should be true.

    //Hint: Use the .endsWith() method.
    const endsWith = hobby.trim().endsWith('powerful!')
    console.log(endsWith)

//Q3: Extract only the word "JavaScript" from the string.

    //Hint: Use the .slice(start, end) method.
    const word = hobby.slice(18, 29)
    console.log(word)
