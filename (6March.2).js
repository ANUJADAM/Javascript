let arr = [2, 3, 4]

arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
})

arr.forEach((element, index, arr) => {
    console.log("arrow: ", index, element, arr);
})

const heros = ["naagraj", "doga", "dhruva", "maniraj"]


heros.forEach((el) => { console.log(el.toUpperCase())})

arr.map(function(element, index, arr){
    console.log(element, index, arr);
})

heros.map((h) => console.log(h.toUpperCase()))

//filter
console.log(heros);
const herosWithRaj = heros.filter((h) => {
    return h.endsWith('raj')
})
console.log(herosWithRaj);

//shopping cart

const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce((prev, curr) => prev+curr, 0)
console.log(sumOfCartBill);

const gameScore = [200, 100, 310, 300, 250, 150]

//check if all values are numbers
console.log(typeof gameScore[1]);
const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
console.log("check: ", gameScoreCheck);

// find score above 200

const above200 = gameScore.find((score) => score > 200 )

console.log(above200);


// findIndex
// some
// sort



/* For each, 
map, filter
Lecture CheckList
1. Introduction to forEach.
2. Syntax.
3. Implementation.
4. Introduction to map method.
5. Syntax.
6. Implementation.
7. Introduction to filter method.
8. Syntax.
9. Implementation.
Introduction to forEach.
Earlier when ever there was a necessity of iterating over arrays, developers 
majorily used for loops. But, using for loop can be slow and error-prone when we 
deal with large complex arrays. So, forEach was standardized with the release of 
ECMAScript 5 (ES5) in 2009.
The introduction of the forEach() method in ES5 provided a more convenient and 
efficient way to iterate over the elements of an array. It allowed developers to 
perform a specific function on each element of an array without having to 
manually write a for loop.
Syntax
The following are the parameters of forEach() in Javascript:
● callbackFunction: This argument contains the method that will be called for 
each array element. It is a mandatory parameter.
● item: the array item on iteration.
● index: This parameter is optional and contains the index number of each 
element.
● array: This parameter is optional and contains the entire array on which the 
Array is being used.
The return value of this method is always undefined. 
Use Case
Let’s imagine you are assigned with task to display all the items added to cart in 
an ecommerce application. You can do it in multiple ways but let’s assume we 
are asked to do it using forEach.
Use Case
Now let’s try to use all the parameters. Let’s print the item name, the position in 
which the item was added to cart and the total cart items.
Introduction to map method.
The map method in javascript was introduced to iterate and perform operations 
on array items in a more concise and readable way.
The map method of the array takes a function as a parameter and returns a new 
array that contains the result of the function performed on each array item.
The map() method is used over other iterative methods such as for loops or 
forEach() based on the applications. map() allows us to easily operate on the 
array items. It returns a new array containing the result of these operations. As it 
creates a new array, the array on which the map method is applied would be 
unaltered and less prone to error.
Syntax
The map method can be applied to an array in the following ways:
1. Function declaration.
2. Arrow Function.
3. Callback Function.
Use Case
Let’s now look at a use case of the map method. Imagine you are working at an 
e-commerce site. Imagine the website is storing the price as strings and you are 
assigned a task to convert all the prices in the cart to numbers so the total can be 
calculated.
Introduction to filter method.
As the name suggests the filter method is used to filter the data present in an 
array. On daily basis in every application, we use filtering. We filter the products in 
a shopping site based on criteria, we filter the posts on any social media based 
on the date posted or based on the keywords. So, filtering the data is one of the 
important part.
The filter method is used to create a new array whose items are the result of the 
filtering criteria of the original array. Only those values which satisfy the given 
criteria are added to a new array, and that array is returned. The original array 
does not get changed. 
Whenever the filter method is applied to an array, we pass a filter function to it. 
The filter function iterates over all the elements of the given array and passes 
each element to the callback function. If the callback function returns true, then 
the element is added to the result array. 
Syntax
The filter method can be applied to an array in the following ways:
1. Function declaration.
2. Arrow Function.
3. Callback Function.
Use Case
Let’s imagine you are working for an e-commerce organization and you are 
assigned to return the long usernames from the data of the username. Long 
usernames in this case are usernames whose length is greater than 5 characters






every, 
find, sort
Lecture CheckList
1. Introduction to every.
2. Features of reduce.
3. Syntax.
4. Implementation.
5. Introduction to find.
6. Features of find.
7. Syntax.
8. Implementation.
9. Introduction to sort
10. Features of the sort.
11. Syntax.
12. Compare Function.
13. Implementation.
Introduction.
The every method in javascript checks if all the items in an array pass the 
specified condition or not. 
Features of reduce.
1. The condition specified in every method is checked for all the items in the array.
2. If all the array items satisfies the condition, every method returns true.
3. If an of the array items doesn’t satisfy the condition, every method returns false.
4. The every method is not valid for an empty array.
5. The every method doesn’t change the original array.
Syntax.
The parameters passed:
1. currentValue: It is a required parameter and is used to specify the value of the 
current element.
2. currentIndex: It is an optional parameter and is used to specify the array index of 
the current element.
3. array: It is an optional parameter and is used to specify the array the current 
element belongs to.
Implementation.
Let’s look at the implementation of the every method. The simplest example 
would be to check if all the array elements are of the same data type.
Implementation.
Implementation.
Introduction.
The find() function in JavaScript is a method used to find the first element in an 
array that satisfies the condition specified.
It returns the value of the found element, and if no element is found that satisfies 
the test, it returns undefined.
Features of find.
1. The find condition is applied to every array element.
2. The find method returns the first element satisfied by the condition passed.
3. If no element satisfies the find condition, undefined is returned.
4. find method is not valid on an empty array.
5. The original array is not changed by applying the find method.
Syntax
The parameters passed:
1. currentValue: It is a required parameter and is used to specify the value of the 
current element.
2. currentIndex: It is an optional parameter and is used to specify the array index of 
the current element.
3. array: It is an optional parameter and is used to specify the array the current 
element belongs to.
Implementation
Let’s look at the implementation of the find method. We can use the find method 
to check if the element is present in the array or not.
Implementation
Introduction
The sort function in javascript is used to sort the string values in an array. It 
converts the array items into strings, compares them, and sorts the values.
Features of the sort
1. The elements are compared according to their sequences of UTF-16 code unit 
values.
2. By default, the arrays are sorted in ascending order.
3. The sorting operation happens on the same array and no new array is created.
Syntax
Compare Function
A compare function in JavaScript is a function that is used to compare two 
elements of an array when sorting the array using the sort() method. The 
function takes two arguments, which are the two elements being compared, and 
returns a value indicating the relative order of the elements.
The compareFunction takes two parameters a and b and returns three possible 
values: 0, negative or positive.
Implementation
First, let's sort the string elements in an array.
Implementation
Let’s now sort an array of numeric values.
Implementation
We need to use a compare function to sort the numbers




Reduce
Lecture CheckList
1. Introduction.
2. Features of reduce.
3. Syntax.
4. Implementation.
Introduction.
As the name suggests the reduce method reduces the array values to a single
value. The reduce() method runs a reducer function on each array item and
returns a single output result. The input array can have numbers, strings, or an
object.
Features of reduce.
1. The reducer function passed will be applied to all the items in the array.
2. The result will be a single value accumulated on passing all the array items to
the reducer function.
3. The reduce method is not valid for empty arrays.
4. The reduce method doesn’t change the original array on which the reduce
method is applied.
Syntax
The parameters accepted:
1. accumulator: It accumulates the initial value and reducer function’s return
values.
2. currentValue: It is a required parameter and is used to specify the value of the
current element.
3. currentIndex: It is an optional parameter and is used to specify the array index
of the current element.
4. array: It is an optional parameter and is used to specify the array the current
element belongs to.
5. initialValue: It is used to specify the value to be passed to the function as the
initial value.
Implementation
Let’s look at the implementation of reduce method. The simplest example to
demonstrate the use of reduce function is by finding the sum of all elements in an
array.
Implementation
THAN*/