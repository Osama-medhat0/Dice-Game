'use strict'

const diceImage = document.querySelector("img");
const roll = document.querySelector(".btn.rollDice");
const hold = document.querySelector(".btn.hold");
const btnNew = document.querySelector('.btn--new');
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");


const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const score0=document.querySelector("#score--0");
const score1=document.getElementById("score--1");

var activePlayer=0;
var random=0;
var currentScore=0;
const scoers=[0,0];
diceImage.classList.add("hidden");


const switchFunction = function(){
 
  diceImage.src=`img/dice-${random}.png`;
  player1.classList.toggle("active");
  player2.classList.toggle("active");
  currentScore=0;
  document.getElementById(`current--${activePlayer}`).textContent=0;
  activePlayer= activePlayer === 0 ? 1 : 0;
}

roll.addEventListener("click",function(){

diceImage.classList.remove("hidden");
random=Math.floor(Math.random()*6+1);

if(random!=1){

  diceImage.src=`img/dice-${random}.png`;
  currentScore+=random;
  document.getElementById(`current--${activePlayer}`).textContent=currentScore;
}
else{
 
  switchFunction();
}
})

hold.addEventListener("click",function(){

  scoers[activePlayer]+=currentScore;
  document.getElementById(`score--${activePlayer}`).textContent=scoers[activePlayer];
   
if(scoers[activePlayer]>=80){
  
  document.querySelector(`.player--${activePlayer}`).classList.add("winner","winner-name");
  hold.disabled=true;
  roll.disabled=true;
}
  switchFunction(); 
})

btnNew.addEventListener("click",function(){

   current0.textContent=0;
   current1.textContent=0;
   score0.textContent=0;
   score1.textContent=0;
   currentScore=0;
   scoers[0]=0;
   scoers[1]=0;
   player1.classList.remove("winner","winner-name");
   player2.classList.remove("winner","winner-name");
   player1.classList.add("active");
   player2.classList.remove("active");
  hold.disabled=false;
  roll.disabled=false;
  })
