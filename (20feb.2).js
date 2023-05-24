let arr = [1,2,3,4,5];
console.log(arr);
// .push() add element in the end of the array
a = arr.push(6)
console.log(a);
console.log(arr);

b = arr.push(7,8,9)
console.log(b);
console.log(arr);

// .pop() remove the element of the array from last index
c = arr.pop()
console.log(c);
console.log(arr);

// .shift it remove element from the starting index
d = arr.shift()
console.log(d);
console.log(arr);

// .unshift() it add the element at the starting index
e = arr.unshift(9)
console.log(e);
console.log(arr);

let a1 = [1,2,3,4,5];
console.log(a1);
let a2 = [3,4,5];
console.log(a2);
let a3 = a1.concat(a2)

console.log(a3);

// let s = a3.join("")
// console.log(s);

let s = a3.join("@")
console.log(s);

a3.reverse();
console.log(a3);

// console.log(a3.indexOf(4));

console.log(a3.indexOf(74));

let arr1 = [1,2,3,4,5,6];

console.log(arr1.slice(2,5));


// arr1.splice(2,0,11);
//  console.log(arr1);

// arr1.splice(2,1,11);
//  console.log(arr1);

arr1.splice(2,2,11);
 console.log(arr1);





 
 /*
 ArrayMethods
● pop()
● push()
● shift()
● unshift()
● concat()
● join()
● slice()
● splice()
● reverse()
● indexOf()
 */