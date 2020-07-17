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
