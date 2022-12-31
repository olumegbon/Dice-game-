'use strict'
const player0EL=document.querySelector('.player--0');
const player1EL=document.querySelector('.player--1')

const score0EL =document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const diceEL =document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const current0EL=document.getElementById('current--0');
const current1EL=document.getElementById('current--1')
let currentScore=0;


score1EL.textContent=0;
score0EL.textContent=0;
diceEL.classList.add('hidden');

const scores=[0,0];
let activePlayer=0;
let playing=true;


const switchPlayer=function(){

    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer=activePlayer===0?1:0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
    

};




btnRoll.addEventListener('click', function(){

    if(playing){
    // generating random
    const dice=Math.trunc(Math.random()*6)+1;
    console.log(dice);

    //display dice
    diceEL.classList.remove('hidden');
    diceEL.src=`dice-${dice}.png`;

    //check for rolled
    if(dice !==1){
        //add dice to current score

currentScore=currentScore+dice;
document.getElementById(`current--${activePlayer}`).textContent=currentScore
//current0EL.textContent=currentScore; //change later
    }else{switchPlayer();
//switch next player

    }
    }

});

btnHold.addEventListener('click',function(){
if(playing){
scores[activePlayer]+=currentScore;

document.getElementById(`score--${activePlayer}`).textContent=
scores[activePlayer];
if(scores[activePlayer]>=20) {
playing=false;
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
diceEL.classList.add('hidden');
}
else{
    switchPlayer();


}}

});

btnNew.addEventListener('click',function(){
    const dice=Math.trunc(Math.random()*6)+1;
document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
diceEL.classList.add('hidden');
player0EL.classList.toggle('player--active');
player1EL.classList.toggle('player--active');
currentScore=0;
document.getElementById('current--0').textContent=0;
document.getElementById('current--1').textContent=0;   
score1EL.textContent=0;
score0EL.textContent=0;
playing=true;
activePlayer=0;
scores[0,0];

});
