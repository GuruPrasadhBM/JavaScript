// /*/*var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher',
// };

// //Function Constructor
// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge = function () {
//   console.log(2020 - this.yearOfBirth);
// };

// var john = new Person('John', 1990, 'teacher');
// john.calculateAge();

// var anotherPerson = new Person('John', 1890, 'teacher');
// anotherPerson.calculateAge();
// */

// //Object Create
// /*
// var personProto = {
//   calculateAge: function () {
//     console.log(2020 - this.yearOfBirth);
//   },
// };

// var john = Object.create(personProto);
// john.name = 'John';
// */

// ////Functions as objects

// var years = [1990, 1995, 2010, 2015];

// function arrayCalc(arr, fn) {
//   var arrResult = [];
//   for (i = 0; i < arr.length; i++) {
//     arrResult.push(fn(arr[i]));
//   }
//   return arrResult;
// }

// function CalculateAge(element) {
//   return 2020 - element;
// }

// function isFullAge(element) {
//   return element >= 18;
// }

// var ages = arrayCalc(years, CalculateAge);
// console.log(ages);

// var fullAges = arrayCalc(years, isFullAge);
// console.log(fullAges);

// // Functions returning functions

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function (name) {
//       console.log(name + ', What Ux design is');
//     };
//   } else if (job === 'teacher') {
//     return function (name) {
//       console.log(name + ', Teacher??');
//     };
//   }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
// teacherQuestion('john');
// designerQuestion('john');

// ////IIFE Immediately Invoked Function Expressions.
// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// //Closures

// function retirement(retirementAge) {
//   return function (yearOfBirth) {
//     var a = 'years left until retirement';
//     var age = 2020 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   };
// }

// var retirementUS = retirement(66);
// retirementUS(1990);

// //An inner function has always access to the variables and
// // and parameters of its outer funcitons, after the outer function has //// returned.

// function interviewQuestion2(job) {
//   return function (name) {
//     if (job === 'designer') {
//       console.log(name + ', What Ux design is');
//     } else if (job === 'teacher') {
//       console.log(name + ', Teacher??');
//     }
//   };
// }

// interviewQuestion('teacher')('john');

// ////Bind Call and Apply

// //Method borrowing

// var john = {
//   name: 'John',
//   age: 26,
//   presentation: function (style, timeOfDay) {
//     if (style === 'formal') {
//       console.log('Hello ' + "I/'m " + this.name);
//     } else {
//       console.log('By the way ' + "I/'m " + this.name);
//     }
//   },
// };

// john.presentation('formal', 'evening');

// var emily = {
//   name: 'Emily',
//   age: 26,
// };

// john.presentation.call(emily, 'formal', 'evening');

// //john.presentation.apply(emily, ['formal', 'evening']);

// //Bind is similar to call

// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('morning');

////Coding Challenge
