/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores =[0,0];
roundScore=0;
activePlayer=0;

//dice=Math.floor(Math.random() * 6 )+ 1;

//query selector selects only the first element it finds.
//Setter
//document.querySelector('#current-' + activePlayer).textContent =  dice;

//To put HTML in selected element
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//To read elements and store it in a variable.
//Getter
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

////Modify css by accessing a class
document.querySelector('.dice').style.display = 'none';

//Get element by id
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

//function button_roll_click()
//{
//    
//}

////Select any element using query Selector
//document.querySelector('.btn-roll').addEventListener('click',button_roll_click);

//Using anonmymous function. a function that cannot be reused
document.querySelector('.btn-roll').addEventListener('click',function()
                                                    {
    //1.Generate a random number
    var dice=Math.floor(Math.random() * 6 )+ 1;
    
    //2. Display the result
    //Show the dice
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //3.update the dice score if the rolled number was not a 1
    if(dice !== 1)
        {
            //Add score
            roundScore += dice;
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        }
    else
        {
            ////Next player
            activePlayer === 0 ? activePlayer =1: activePlayer= 0; 
            roundScore=0;
            
            document.getElementById('current-0').textContent=0;
            
            
            document.getElementById('current-1').textContent=0;
            
//            document.querySelector('.player-0-panel').classList.remove('active');
//            
//             document.querySelector('.player-1-panel').classList.add('active');
            
             document.querySelector('.player-0-panel').classList.toggle('active');
            
             document.querySelector('.player-1-panel').classList.toggle('active');
            
            document.querySelector('.dice').style.display='none';
        }
    
});