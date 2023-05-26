/*Expression Function
Lecture CheckList
1. Introduction to function expressions.
2. Syntax.
3. Implementation.
4. Advantages of function expressions.

Introduction to function expressions:

Functions are usually declared using the syntax which we have discussed in
previous lectures. Besides this JavaScript has a function expression which is a
way to define a function and assign it to a variable. The syntax is quite different
from the function declaration.*/

// Syntax:
let variableName = function () {
    // function body
};

// calling function
console.log(variableName);

// Syntax:
let variableName1 = function functionName() {
    // function body
};

// calling function
console.log(variableName1);

/*Function expressions can be named too. But to reference that function we must
use the variable associated with it.*/
/*Let’s write a function to add two
numbers.
The main advantages of function
expressions are:
1. Function expressions can be used as an argument to another function, but
function declarations cannot.
2. Function expressions can be anonymous, while function declarations cannot*/