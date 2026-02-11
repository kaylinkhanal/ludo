/*Q1: The Discount Checker Create a variable price = 100. 
If the price is greater than 50, subtract 10 from it. Otherwise, keep it the same. Output the final price.*/

let price = 100
if ( price > 50 ){
    price = price - 10
}
console.log (price);


/*Q2: Secret Password Create a variable userInput = "1234". 
Write an if statement: if the input is "1234", print "Access Granted." Otherwise, print "Access Denied."*/
let password = "1234"
if (password = "1234")
{
    console.log ("access success")
}
else{
    console.log ("denied")
}


/*Q3: Temperature Check Create a variable temp = 15. 
If the temp is below 20, print "Wear a jacket." If it's 20 or above, print "T-shirt weather."*/
let temp = 15
if (temp > 20)
{
    console.log ("wear jacket")
}
else{
    console.log ("tshirt weather")
}


/* Q4: The "No-Negative" Price Imagine a user has a discount code that is bigger than the price of the item.
 Create a variable totalPrice = -15. Because a price can't be negative (you wouldn't pay a customer to buy something!), 
 use a math method to turn that -15 into a positive 15.*/ 

 const totalprice = -15

 const output = Math.abs(totalprice)
 console.log(output)



 /** Q5: The Fuel Gauge (Rounding Down) Create a variable litersOfGas = 45.87. 
   You want to show the user only the whole number (the full liters) without any decimals, 
   but you don't want to round up. You want to "chop off" the decimals so it shows 45. */

   const litersOfGas = 45.87
   const answer = Math.floor(litersOfGas)
   console.log (answer)

   



