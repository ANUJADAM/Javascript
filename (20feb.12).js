let obj = { id : 101,name : "Alex",salary : 100000}
console.log(obj)

// using new
let emp = new Object();
emp.id = 102;
emp.name = "sam"
emp['salary'] = 13000;
console.log(emp);

// using function
function Emp(i,n,s){
    this.id = i;
    this.name = n;
    this.salary = s;
}
const e = new Emp(103,"Amy",12000)
console.log(e);
console.log(emp['name']);


// Accessing the key-value of the object
console.log(emp.id);
emp.id = 13
console.log(emp);

// delete
delete emp.id
console.log(emp);

/*Creating object and manipulating values in object
List of content
1. Creating an object
2. Manipulating values in object
Creating an object
There are majorly 3 ways to create an object in javascript :
1. By object literal
2. By creating an instance of Object directly (using new keyword)
3. By using an object constructor (using new keyword)

By object literal:

Syntax:
object={name1:value1, name2:value2.....name N:valueN}

By creating instance of object directly:

Syntax:
var objectname=new Object();
Here, new keyword is used to create object.

By using an object constructor:

Here, we create function with arguments.
Each argument value can be assigned in the current object by using this keyword.

Manipulating values in object:

In data manipulation, we will cover the following:
● Accessing data
● Adding Data
● Changing data
● Deleting data

Accessing data:

We can use either dot notation or square bracket notation to access object properties or
alter values.
Format for dot notation: objectName.propertyName.
Format for dot notation: objectName.propertyName.
Format for the square bracket notation: objectName['propertyName'].

Adding Data:

● It is simple to add additional key-value pairs to an existing object.
● Dot notation or square bracket notation can be used to accomplish that.

Changing data:

Sometimes all an object needs is a simple value change.
We accomplish this using dot notation or square bracket notation, just as we do when
adding new data.

Deleting data:

Data in an object can only be deleted with one method.
It is done using the keyword delete.
Data is not lost if we use undefined or null; the key is kept but the value is altered*/