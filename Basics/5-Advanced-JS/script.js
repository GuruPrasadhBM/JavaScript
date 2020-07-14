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

var personProto = {
  calculateAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};

var john = Object.create(personProto);
john.name = 'John';
