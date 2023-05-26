/*Anonymous Function
Lecture CheckList
1. Introduction to Anonymous functions.
2. Anonymous Functions.
3. Syntax of Anonymous functions.
4. Immediately Invoked Function Execution

Introduction to Anonymous functions:

As the name suggests "Anonymous", is something that does not have any "name"
or "identity". Similarly, anonymous functions in javascript are functions that do
not have any name. Named functions are simply functions, that have some name
associated with them, you can consider them as the normal javascript functions
we use.
In general, an anonymous function is a function without a function name but can
be assigned to a variable. Arrow functions are also anonymous functions with a
compact syntax.

Anonymous Functions:

If we try to run normal functions without name, it will result in an error saying the
Function statement requires a function name. We cannot have a function without
a name in JavaScript. But then, how do we create anonymous functions?
*/

// Syntax of Anonymous functions:
let variableName = function () {
    // function body
};
// calling function
variableName();


// Immediately Invoked Function Execution

/*Sometimes, we need to execute the function immediately instead of calling it at a
later point in time. In these situations, anonymous functions are a great option
since they can be executed right when declared.
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that
gets called immediately. It is a way to execute functions immediately, as soon as
they are created.*/

// Immediately Invoked FunctionExecution:
variableName();

// IIFE
(function (num) {
    // function body
    console.log(num*num);
})(5);
