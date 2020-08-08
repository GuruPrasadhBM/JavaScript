console.log('Difference between Var and Let ');

if (true) {
  var varVariable = 'This is true';
}
console.log(varVariable);

var varVariable = 'This can be redefined';

console.log(varVariable);

if (true) {
  let letVariable = 'This is true';
  console.log('Value of letVariable inside the block : ' + letVariable);
}

//console.log('Value of letVariable out side the block : ' + letVariable);
const person = { name: 'Guru' };
//person = { name: 'Prasadh' }; //// Not allowed
person.name = 'Mahalingam'; /// Allowed
console.log(person.name);

/*
1. Var is function scoped
2. let and const are block scoped

3. var can be redefined
For ex

var varVariable = 100; 
var varVaribale = 200; ////Allowed

let letVariable = 100;
let letVariable = 200; ////Not allowed

4. If we use any variable without declaration we get "Reference Error"

5. With var, the variable can be used before declaration and the value will be undefined
For ex

clg(varVariable);
var varVariable = 100;
clg (varVariable);
// All the above statements are valid and allowed


const constValue = 100;
const person = {name : "Guru"} 
person={name : "Prasadh"}; //// Not allowed

However
person.name = "Mahalingam"; /// Allowed
*/
