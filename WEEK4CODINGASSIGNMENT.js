console.log('Question 1') //1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//created array as requested, and included the values, followed by the console logging of it

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; 
console.log(ages);

console.log('Question 1a')  //1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array ** Do not use numbers to reference the last element, find it programmatically, •	ages[7] – ages[0] is not allowed!
// First I found how to subtract, only to then see I couldn't use the ages[7] – ages[0], so I had to find the correct wording, and got it.  

console.log(ages[ages.length -1] - ages[0]); 

console.log('Question 1b') //1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//Added the number 13 and pushed it, to show that it was for any number to ensure it was in fact dynamic (that any number would make this work)

ages.push(13);  
console.log(ages[ages.length -1] - ages[0]); 

console.log('Question 1c') //1c.	Use a loop to iterate through the array and calculate the average age. 
// was able to calculate that any number in this array would show average age. 

let sum= 0
for(let i=0; i < ages.length - 1; i++){
    sum += ages[i] 
}
console.log(sum / (ages.length)) 


console.log('Question 2') //2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//Created array and listed the values requested

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; 
for(i = 0; i< names.length; i++) {
console.log(names[1]);
}

console.log('Question 2a')//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
// used a loop to iterate via the array and get the avg number of letters in the given sames in 2. 

sum =0; 
for(i = 0; i<names.length; i++) {
    sum += names[i].length
}
console.log(sum / names.length);

console.log('Question 2b') //2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
// used Loop the same array as in 2a, and than to add/concatenate all the games together with spaces

sum = ""; 

for(i = 0; i<names.length; i++) {
    sum += names[i] +" " 
}
console.log(sum);

console.log('Question 3')//3.	How do you access the last element of any array?
//steps I took to locate are in the console log for this

console.log("array[array.length -1]")

console.log('Question 4') //4.	How do you access the first element of any array?
//steps I took to locate are in the console log for this

console.log("Array [0]")

console.log('Question 5') //5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// created new array, wrote loop from the previously create names array. 
let nameLengths = []; 

for(i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)  
}

console.log(nameLengths);

//For example:

//let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array let nameLengths = [5, 3, 4]; 			
//create this new array

console.log('Question 6')//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
//created the loop of all the elements in the array

let counter = 0
	for (let i = 0; i < nameLengths.length; i++) {
        counter += nameLengths[i]; 
         
    }
	console.log(counter)	


console.log('Question 7') //7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
// took two params from function created, and returned the word concatenated 3x(combined)

function combine(word, n) {
	let message = word * n
	return message
} console.log(combine('Hello', 3))

console.log('Question 8') // 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
//created a function, with full name = firstName + ' ' + lastName to give fully name with a space
function createFullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName
    return fullName
}
console.log(createFullName ('Becky', 'Hammon'))

console.log('Question 9')//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// created function with array totaling over the sum of 100

let array1 = [13, 7, 20, 3, 24, 25, 76]
let array2 = [2, 79, 12]
function bigMomma(arr) {
    let amount = 0 
    for (let i = 0; i < arr / length; i++) {
        amount = amount + arr[i]
    }
    if (amount > 100) {
        return false
    } else
return false
}

console.log('Question 10')//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
//created function of array with numbers that returns the avg of the elements

let avg =  [23, 3, 25, 20, 24, 76, 73, 49];
 let total = 0;
 for(let i = 0; i < avg.length; i++) {
     total += avg[i]
 }
console.log(avg = total / avg.length)

console.log('Question 11')//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
//created function of greaterthan two arrays averaging the elements in the array length

function greaterThan(num1, num2) {
    for (let i = 0; i > array1.length; i++){}
        const element = array[i]; 
}

console.log('Question 12')//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
//created function called, that has boolean, with true/false statements/objects. 

function willBuyDrink(isHotOutside,moneyInPocket) {
    if (isHotOutside === true && (moneyInPocket > 10.50)) {
       return true 
    }
    else{ 
        return false
    }
     
}
console.log(willBuyDrink(true, 15.00))
console.log(willBuyDrink(true, 10.00))
console.log(willBuyDrink(true, 10.50 ))
console.log(willBuyDrink(false, 25.00))


console.log('Question 13')//13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
//function is supposed to tell you if my Team is better than the other team 


function battleOfWnbaTeams(myFavoriteTeam, lasVegasAces) {

    if (myFavoriteTeam === "PhoenixMercury") {
        return true 
    }
    return false

}
console.log("PhoenixMercury")