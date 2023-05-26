let emp = {
     id:101,name:'Anu',age:22
};
 let keys = Object.keys(emp)
 console.log(keys);

 let values = Object.values(emp)
 console.log(values);

 let entries = Object.entries(emp)
 console.log(entries);

//  Object.freeze(emp);
// emp.id = 100
// emp.address = 'random'
// console.log(emp);

Object.seal(emp)
emp.id = 100
emp.address = 'random'
console.log(emp);

// Making new object using the object
let O = Object.assign({x:16},emp)
console.log(O);




/*Object methods
List of content
1. Object methods
2. Types and examples
Object Methods:
● Actions on objects are carried out using methods.
● An object Property that includes a function declaration is known as an object
method.
Types of object methods:
● Object.values()
● Object.keys()
● Object.freeze()
● Object.seal()
Object.values()

Object.values()

is a method returns an array of an object's own property values.

Object.keys()

It is a method that returns an array of an object's own property names.

Object.freeze()

● An object is frozen using the procedure.
● Changing a frozen object is impossible.
● It prevents the addition and deletion of properties.
● Additionally, it prevents changes to property values from occurring unless an
object is involved.

Object.seal()

● It is a method identical to Object.freeze().
● You cannot add or remove an object's properties, but you can edit the value of
an existing property.*/