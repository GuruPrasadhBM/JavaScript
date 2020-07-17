////Arrays
var arr = [10, 20, 30, 40];
console.log(arr[4]);

//Out of index returns undefined

//Add element in an array
//
arr[20] = 6;
console.log(arr[5]);
console.log(arr[20]);
console.log(arr[19]);
console.log(arr.length);
var newArr = arr;
console.log(arr[20]);

//Array[0] is converted to Array["0"] // Type coercion
console.log(arr);

arr['foo'] = 'bar'; // Will be added, but the length of the array
//remains same

////30 Wrapper objects
// Is string a primitive or an object

var greeting = 'Hello World';
console.log(greeting.length);
console.log(typeof greeting);

//String primitive has a equivalent object (wrapper object)

//Functions
function sayHello() {
  console.log('Hello');
}

sayHello();

//Function with args
function sayHello(name) {
  console.log('Hello ' + name);
}

function sayHello(name, age) {
  console.log('Hello ' + name + '  ' + age);
}

sayHello('Guru');
sayHello('Guru', 32, 44); //// With additional argument
// Overloaded functions are not possible with JavaScript

//34 . Function Expressions
// Functions are values; it iteslef is a value (First class values)
var a = 'hello';
var fn = function foo() {
  console.log('Hello from a function');
};

fn();

//#35 Anonymous function expressions
