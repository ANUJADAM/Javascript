/*Function with a parameter:
(Single, and Multiple)
Lecture CheckList
1. Function with parameter.
2. Function with one parameter.
3. Function with default parameter.
4. Function with two parameters.
5. Array as an argument.

Function with a parameter:
Before looking into the syntax and code let’s understand what is a parameter and 
along with the parameter comes an argument.

A parameter is a variable in a function definition.

An argument is the actual value passed to the function when the function is 
called.

Inside a function, we can take one, two, multiple, and an unlimited number of 
parameters. In this lecture we will be looking into how to take one parameter 
inside the function and the rest will be seen in further lectures.


Function with one parameter:
Let's look at an example where we will be writing a function that displays the 
message passed as a parameter onto the console.
*/
// function with parameter

// Function declaration
function displayMessage(messageToBeDisplayed) {
    console.log(messageToBeDisplayed);
}

/*In the above example the “messageToBeDisplayed” is the parameter which is 
specified in the function declaration.

Function with one parameter:*/

function displayMessage(messageToBeDisplayed) {
    console.log(messageToBeDisplayed);
}
//  function calling
displayMessage("I am happy to learn Full Stack Web Development ");
displayMessage("I am enjoying the journy of javascript");


/*Function with default parameter:
Sometimes functions are written with default parameter values to avoid errors 
when the function is called without passing any arguments.*/

function displayMessage(
    messageToBeDisplayed = "I am a student"
) {
    console.log(messageToBeDisplayed)
}
// calling function
displayMessage("My name is anu");

displayMessage();


/*Function with two parameters.
To look at the function with two parameters, the best example would be of writing 
a function that gives us the sum of two numbers by taking the numbers as 
parameters.*/
function sumOfTwoNumber(num1,num2) {
    return num1+num2;
}

// calling function
let result = sumOfTwoNumber(10,20);
console.log(result);

/*Array as an argument.
It is not necessary to always pass arguments as primitive values or variables 
containing primitive values. We can also pass the values as an array.*/

function sumOfTwoNumbers([num1,num2]) {
    return num1+num2;
}

// calling function
let number = [10,40]
let sum = sumOfTwoNumbers(number);
console.log(sum);