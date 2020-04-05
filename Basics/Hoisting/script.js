///////////////////////////////////////
// Lecture: Hoisting

//// Functions hoisting
//Using the function before it is declared
// The creation phase of the execution context, in this case the Global execution context. The function is created in the variable declaration object. Hence it is not mandatory to declare the function and use it.
calculateAge(1982);

function calculateAge(year)
{
    console.log(2020- year);
}


////Using Function Expression

////In the below case we get Uncaught TypeError ////because the function expression is not initialized in during th creating phase of execution context.


//retirement(1982);

var retirement = function(year)
{
    console.log(65- (2020 - year));
}



//// Hoisting variables

console.log(age); ////
var age=23;
//console.log(age); //// This Prints "undefined"

function foo()
{
    var age = 65;
    console.log(age);
}

foo();
console.log(age);



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Lexical scoping: A function that is lexically within another function gets access to the scope of the outer function.

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

calculateAge(1982);

function calculateAge(year)
{
    console.log(2020-year);
    console.log(this);
}


var john =
    {
        name: "Guru",
        yearOfBirth:1982,
        calcuateAge : function()
        {
            console.log(this);
             console.log("Age : " + (2020-this.yearOfBirth));
            
            function innerFunction()
            {
                 console.log("From Innerfunction");
                console.log(this);
            }
            
            innerFunction();
        }
 }



john.calcuateAge();

