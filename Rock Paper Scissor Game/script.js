let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let result = document.querySelector("h3");
let wins = document.querySelector("#wins");
let loses = document.querySelector("#loses");
let tie = document.querySelector("#tie");
let resetGame = document.querySelector("#reset-game");
const score = {
    wins: 0, loses: 0, tie:0
};
function choiceRock(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber == 1){
        result.textContent = "Tie😕";
        result.style.color = "Yellow";
        score.tie += 1;
    }else if(randomNumber == 2){
        result.textContent = "You Lose😔";
        result.style.color = "red";
        score.loses += 1;
    }else if(randomNumber == 3){
        result.textContent = "You Win😍";
        result.style.color = "lightGreen";
        score.wins += 1;
    }
}
function choicePaper(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber == 1){
        result.textContent = "You Win😍";
        result.style.color = "lightGreen";
        score.wins += 1;
    }else if(randomNumber == 2){
        result.textContent = "Tie😕";
        result.style.color = "Yellow";
        score.tie += 1;
    }else if(randomNumber == 3){
        result.textContent = "You Lose😔";
        result.style.color = "red";
        score.loses += 1;
    }
}
function choiceScissor(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber == 1){
        result.textContent = "You Lose😔";
        result.style.color = "red";
        score.loses += 1;
    }else if(randomNumber == 2){
        result.textContent = "You Win😍";
        result.style.color = "lightGreen";
        score.wins += 1;
    }else if(randomNumber == 3){
        result.textContent = "Tie😕";
        result.style.color = "Yellow";
        score.tie += 1;
    }
}
rock.addEventListener("click", function(evt){
    choiceRock();
    wins.innerText = `Wins: ${score.wins}`;
    loses.innerText = `Loses: ${score.loses}`;
    tie.innerText = `Tie: ${score.tie}`;
})
paper.addEventListener("click", function(evt){
    choicePaper();
    wins.innerText = `Wins: ${score.wins}`;
    loses.innerText = `Loses: ${score.loses}`;
    tie.innerText = `Tie: ${score.tie}`;
})
scissor.addEventListener("click", function(evt){
    choiceScissor();
    wins.innerText = `Wins: ${score.wins}`;
    loses.innerText = `Loses: ${score.loses}`;
    tie.innerText = `Tie: ${score.tie}`;
})
resetGame.addEventListener("click", function(){
    wins.innerText = "Wins: 0";
    loses.innerText = "Loses: 0";
    tie.innerText = "Tie: 0";
    score.wins = 0;
    score.loses = 0;
    score.tie = 0;
    result.textContent = "Result Value";
    result.style.color = "#dadada";
})