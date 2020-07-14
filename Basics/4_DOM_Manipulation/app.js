/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, isGamePlaying;
Init();

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

//function button_roll_click()
//{
//
//}

////Select any element using query Selector
//document.querySelector('.btn-roll').addEventListener('click',button_roll_click);

//Using anonmymous function. a function that cannot be reused
document.querySelector('.btn-roll').addEventListener('click', function () {
  if (isGamePlaying) {
    //1.Generate a random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    //Show the dice
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3.update the dice score if the rolled number was not a 1
    if (dice !== 1) {
      //Add score
      roundScore += dice;
      document.querySelector(
        '#current-' + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
  //1. Add current score to GLOBAL score
  scores[activePlayer] += roundScore;
  roundScore = 0;

  //2 Update the UI
  document.querySelector('#score-' + activePlayer).textContent =
    scores[activePlayer];

  //3. Check if the player won the game

  if (scores[activePlayer] >= 20) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner';
    var diceDOM = document.querySelector('.dice');
    diceDOM.display = 'none';
    document
      .querySelector('.player-' + activePlayer + '-panel')
      .classList.add('winner');
    document
      .querySelector('.player-' + activePlayer + '-panel')
      .classList.remove('active');
    isGamePlaying = false;
  } else {
    //Next player
    nextPlayer();
  }
});

function nextPlayer() {
  ////Next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', Init);

function Init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  isGamePlaying = true;

  ////Modify css by accessing a class
  document.querySelector('.dice').style.display = 'none';

  //Get element by id
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';
  document.querySelector('.player-' + 0 + '-panel').classList.remove('winner');
  document.querySelector('.player-' + 1 + '-panel').classList.remove('winner');
  document.querySelector('.player-' + 0 + '-panel').classList.remove('active');
  document.querySelector('.player-' + 1 + '-panel').classList.remove('active');
  document.querySelector('.player-' + 0 + '-panel').classList.add('active');
}
