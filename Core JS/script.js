// // ////Arrays
// // var arr = [10, 20, 30, 40];
// // console.log(arr[4]);

// // //Out of index returns undefined

// // //Add element in an array
// // //
// // arr[20] = 6;
// // console.log(arr[5]);
// // console.log(arr[20]);
// // console.log(arr[19]);
// // console.log(arr.length);
// // var newArr = arr;
// // console.log(arr[20]);

// // //Array[0] is converted to Array["0"] // Type coercion
// // console.log(arr);

// // arr['foo'] = 'bar'; // Will be added, but the length of the array
// // //remains same

// // ////30 Wrapper objects
// // // Is string a primitive or an object

// // var greeting = 'Hello World';
// // console.log(greeting.length);
// // console.log(typeof greeting);

// // //String primitive has a equivalent object (wrapper object)

// // //Functions
// // function sayHello() {
// //   console.log('Hello');
// // }

// // sayHello();

// // //Function with args
// // function sayHello(name) {
// //   console.log('Hello ' + name);
// // }

// // function sayHello(name, age) {
// //   console.log('Hello ' + name + '  ' + age);
// // }

// // sayHello('Guru');
// // sayHello('Guru', 32, 44); //// With additional argument
// // // Overloaded functions are not possible with JavaScript

// // //34 . Function Expressions
// // // Functions are values; it iteslef is a value (First class values)
// // var a = 'hello';
// // var fn = function foo() {
// //   console.log('Hello from a function');
// // };

// // ////Function declaration
// // function simpleFn() {
// //   console.log('Hello from a function');
// // }

// // fn();

// // //#35 Anonymous function expressions
// // var anonyFn = function () {
// //   console.log('I am an Anonymous function');
// // };

// // anonyFn();

// // var executor = function (fn) {
// //   fn();
// // };

// // executor(anonyFn);

// // ////this keyword

// // var person = {
// //   firstName: 'Guru',
// //   lastName: 'Prasadh',
// //   getFullName: function () {
// //     return this.firstName + ' ' + this.lastName;
// //   },
// //   address: {
// //     state: 'CA',
// //   },

// //   isFromState: function (stateName) {
// //     console.log(this.address.state === stateName);
// //   },
// // };

// // person.isFromState('CA');

// // //Arguments

// // var add = function (a, b) {
// //   // console.log(arguments);

// //   return a + b;
// // };

// // console.log(add(2, 3, 4, 5, 6, 7));

// // var myArray = [1, 2, 6, 8, 9];

// // var funcExp = function (item, index) {
// //   console.log(item + ' ' + index);
// // };

// // myArray.forEach(funcExp, 2);

// // ////IIFE
// // (function () {
// //   console.log('IIFE : ' + 5 + 5);
// // })();

// // var a = 10;

// // function testFn(name) {
// //   var a = 10;
// //   console.log('Hello ! ' + name);
// //   c = 100;
// // }

// // testFn('Guru');

// // console.log('Value of C is : ' + c);

// ////Closure
// var a = 10;

// function outer() {
//   //console.log(a);

//   var inner = function () {
//     var b = 20;
//     console.log(a);
//     console.log(b);
//   };
//   return inner;
// }

// var innerFn = outer();
// innerFn();

// ////Module Pattern

// function CreatePerson() {
//   var firstName = 'Guru';
//   var lastName = 'Prasadh';
//   var retunObj = {
//     getfirstName: function () {
//       return firstName;
//     },

//     getlastName: function () {
//       return lastName;
//     },
//   };

//   return retunObj;
// }

// var person = CreatePerson();
// person.lastName = 'Modified';
// console.log('The last name of the person is  : ' + person.lastName);
// console.log('The last name of the person is  : ' + person.getlastName());

// ////Async and closures

// var i;
// var iVal = function () {
//   console.log('Value of I is : ' + i);
// };

// function PrintI() {
//   for (i = 0; i < 10; i++) {
//    // setTimeout(iVal, 1000);
//   }
// }

// PrintI();

// ///Async with IFFE

// var j;

// function PrintJ() {
//   for (j = 0; j < 10; j++) {
//     (function () {
//       var currentValueOfJ = j;

//       setTimeout(function () {
//         //console.log('Value of J is : ' + currentValueOfJ);
//       }, 1000);
//     })();
//   }
// }

// PrintJ();

// ////IIFE With passing k as an argument

// var k;

// function PrintK() {
//   for (k = 0; k < 10; k++) {
//     (function (currentValOfK) {
//       setTimeout(() => {
//         //console.log('The Value of k is ' + currentValOfK);
//       }, 1000);
//     })(k);
//   }
// }

// PrintK();

// ////IIFE with modification
// var l;

// function PrintL() {
//   for (l = 0; l < 10; l++) {
//     ((currentValOfL) => {
//       setTimeout(() => {
//        // console.log('The Value of L is ' + currentValOfL);
//       }, 1000);
//     })(l);
//   }
// }

// PrintL();

// var a;

// function PrintA() {
//   for (a = 0; a < 10; a++) {
//     ((currenTA) => {
//       setTimeout(() => {
//         //console.log(currenTA);
//       }, 1000);
//     })(a);
//   }
// }

// PrintA();

// var y;

// function Printy() {
//   for (y = 0; y < 10; y++) {
//     ((currentValOfy) => {
//       setTimeout(() => {
//        // console.log('CurrentValue of y is : ' + currentValOfy);
//       }, 1000);
//     })(y);
//   }
// }

// Printy();

// var emp1 = {};
// emp1.firstName = 'Guru';
// emp1.gender = 'Male';
// emp1.designation = 'Lead Engineer';

// function CreateEmployeeObject(firstname, gender, designation) {
//   //var newObj = {};
//   this.firstName = firstname;
//   this.gender = gender;
//   this.designation = designation;
//   //return newObj;
// }

// var emp3 = new CreateEmployeeObject('Balaji', 'Male', 'Sr Lead');

function Employee(name) {
  this.name = name;
}

var empl1 = new Employee('guru');
Employee.prototype.playPranks = function () {
  var testVal = 1;
  console.log('Played pranks');
};

empl1.__proto__.playPranks();
//empl.playPranks();empl
empl1.testVal = 2;

var empl2 = new Employee('prasadh ');
Employee.prototype.playPranks = function () {
  var testVal = 1;
  console.log('Played pranks');
};

empl2.__proto__.playPranks();
//empl.playPranks();empl
console.log('Empl2 :' + empl1.testVal);
empl2.__proto__.SayHello = function () {
  console.log(this.name + ' Hello');
};

empl2.SayHello();
empl1.SayHello();
