/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer;
function init(){
     scores=[0,0]; 
    /*scores[0]is first player and scores[1] is second player */
     roundScore=0;
     activePlayer=0;
    document.querySelector('.dice').style.display='none';
    document.querySelector('#score-0').textContent='0';
    document.querySelector('#score-1').textContent='0';
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
}


init();


document.querySelector('.btn-roll').addEventListener('click',function(){
    // 1.random number
   var dice=Math.floor(Math.random()*6)+1;

    //display the result
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';

    //update the round score if the rollowed no was not 1
    if(dice!==1){
        //add score
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;

    }
    else{
        //next player
        nextPlayer();
        
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
// Add current score to globalScore;
scores[activePlayer]+=roundScore;
//update user Interface
document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
//check player wins the game
if(scores[activePlayer]>=10){
    document.querySelector('#name-'+activePlayer).textContent='Winner!';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
}
else{
    nextPlayer();
}

});

function nextPlayer(){
    if(activePlayer===0)
     activePlayer=1;
    else
    activePlayer=0;

        roundScore=0;

        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);
//
//document.querySelector('#current-'+activePlayer).textContent=dice;


