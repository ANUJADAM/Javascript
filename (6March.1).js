const powerTwo = (n) => {
    return n ** 2
}

function powerCube(powerTwo, n){
    return powerTwo(n) * n
}

// console.log(powerCube(powerTwo, 3));

function sayHello(){
    return () => {
        console.log("Hello Hitesh");
    }
}

let guessValue = sayHello()
// console.log(guessValue);

// guessValue()


const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return m + n + p
        }
        return twoFun
    }
    return oneFun
}

console.log(higherOrder(2)(3)(4))


const myNums = [2, 3, 4, 5]

const sumArray = arr => {
    let total = 0
    arr.forEach(function(element){
        total += element
    });
    return total
}

// console.log(sumArray(myNums));

function oneMoreHello(){
    console.log("Hello hitesh ! ", Math.random());
}

setInterval(oneMoreHello, 1000)

// setTimeout(oneMoreHello, 2000)


/*What are  higher order 
function
List of content:
1. What are higher-order functions
2. Example

Higher order function
● The functions that use only primitives (pre-defined datatypes) or objects as 
arguments, and only return primitives or objects are named first-order 
functions.
● functions are treated as first-class citizens in JavaScript which means that 
functions can be
1. assigned to different variables
2. passed as arguments to different functions
3. returned from different functions
● This brings us to higher order function concept
Functions that accept another function as an argument or return another 
function, are infact, Higher-order functions


Callback and  Returning function
List of content:
1. What is callback
2. Example
3. Callback Hell
4. Returning a function 
5. Examples
What is a callback?
● A callback is a function that is to be executed after another function has 
finished execution.
● Alternatively, we can also define it as any function that is passed as an 
argument to another function so that it may be executed in that other function 
is referred to as a callback function


Setting Time (Set Interval  and Set timeout)
List of content:
1. setTime()
2. setInterval()
3. clearInterval()
4. setTimeout()
5. clearTimeout()
setTime()
● By adding specified milliseconds to the date January 1, 1970, the JavaScript 
Date setTime() Function can be used to obtain a date object.
● It takes milliseconds as the parameter and returns an output date by adding 
these milliseconds to January 1, 1970
● The setTime() function helps to assign a date and time to another Date object


*/
