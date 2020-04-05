//Method borrowing

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
                console.log("From Inner Function : " + this);
            }
            innerFunction();
        }
 }

john.calcuateAge();
var mike =
    {
        name:"mike",
        yearOfBirth : 1982
    };

mike.calcuateAge = john.calcuateAge;
mike.calcuateAge()