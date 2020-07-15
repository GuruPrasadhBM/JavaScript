/*var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher',
};

//Function Constructor
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};

var john = new Person('John', 1990, 'teacher');
john.calculateAge();

var anotherPerson = new Person('John', 1890, 'teacher');
anotherPerson.calculateAge();
*/

//Object Create
/*
var personProto = {
  calculateAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};

var john = Object.create(personProto);
john.name = 'John';
*/

////Functions as objects

var years = [1990, 1995, 2010, 2015];

function arrayCalc(arr, fn) {
  var arrResult = [];
  for (i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]));
  }
  return arrResult;
}

function CalculateAge(element) {
  return 2020 - element;
}

function isFullAge(element) {
  return element >= 18;
}

var ages = arrayCalc(years, CalculateAge);
console.log(ages);

var fullAges = arrayCalc(years, isFullAge);
console.log(fullAges);

// Functions returning functions

function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', What Ux design is');
    };
  } else if (job === 'teacher') {
    return function (name) {
      console.log(name + ', Teacher??');
    };
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('john');
designerQuestion('john');

////IIFE Immediately Invoked Function Expressions.
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();
