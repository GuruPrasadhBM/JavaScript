//Named function With multiple parameters
function sum(a, b) {
  return a + b;
}

let sumArrow = (a, b) => {
  return a + b;
};

let sumArrow2 = (a, b) => a + b;

//Named function with one parameter
function isPositive(number) {
  return number >= 0;
}

let isPositive2 = (number) => number >= 0;

//Named function without any parameters
function randomNumber() {
  return Math.random;
}

let randomNumber2 = () => Math.random;

//Anonymous function
document.addEventListener('click', function () {
  console.log('Click');
});

document.addEventListener('click', () => {
  console.log('Click');
});

class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log('Arrow: ' + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log('Function: ' + this.name);
    }, 100);
  }
}

let person = new Person('Guru');
person.printNameArrow();
person.printNameFunction();
