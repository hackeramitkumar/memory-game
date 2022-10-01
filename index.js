
const cards = document.querySelectorAll('.memory-card')
const restartBtn = document.querySelector('#restart-btn')
const timer = document.querySelector('#timer')
let counter = 0;


var level = prompt("Enter the difficulty lable of your game : "); 
var req_score = 0;
if(level === "easy"){
    document.getElementById("hard").style.display = "none";
    document.getElementById("medium").style.display = "none";
    req_score = (4*3)/2;
}else if(level === "hard"){
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    req_score = (4*3)/2;
}else{
    document.getElementById("easy").style.display = "none";
    document.getElementById("hard").style.display = "none";
     req_score = (4*3)/2;
}

//increasing the counter

const interval = setInterval(function(){
    counter++;
    console.log()
    timer.innerHTML = "<b>" + counter + "</b>";
  }, 1000);

function restartGame(){
    window.location.reload()
}

const flippedCards = []
let matched=0;

function checkForMatch(){
    //if matched
    if(flippedCards[0].dataset.character===flippedCards[1].dataset.character)
    {
        //remove listener from the card to avoid clicking again
        flippedCards[0].removeEventListener('click',flipCard)
        flippedCards[1].removeEventListener('click',flipCard)
        
        matched++;
        if(matched===6)
        {
        alert("hurrah! you did it")
        clearInterval(interval)
        }
        else
        alert("woah! matched")
        
    }
    //if not matched
    else
    {
        flippedCards.forEach(flippedCard=>{
            flippedCard.children[1].style.display="block";
        })
        alert("haha! better luck next time");
    }

    flippedCards.length= 0;
}

function flipCard(e){
    const card = e.target
    flippedCards.push(card)
    card.children[1].style.display="none";

    //when we have filled two cards check for the match
    if(flippedCards.length === 2)
    {
        setTimeout(checkForMatch,0); 
    }
}

cards.forEach(card=>{
    card.addEventListener('click',flipCard);
})


