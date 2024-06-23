let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let result = document.querySelector("h3");
function choiceRock(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber == 1){
        result.textContent = "Tie😕";
        result.style.color = "Yellow";
    }else if(randomNumber == 2){
        result.textContent = "You Lose😔";
        result.style.color = "red";
    }else if(randomNumber == 3){
        result.textContent = "You Win😍";
        result.style.color = "lightGreen";
    }
}
function choicePaper(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber == 1){
        result.textContent = "You Win😍";
        result.style.color = "lightGreen";
    }else if(randomNumber == 2){
        result.textContent = "Tie😕";
        result.style.color = "Yellow";
    }else if(randomNumber == 3){
        result.textContent = "You Lose😔";
        result.style.color = "red";
    }
}
function choiceScissor(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber == 1){
        result.textContent = "You Lose😔";
        result.style.color = "red";
    }else if(randomNumber == 2){
        result.textContent = "You Win😍";
        result.style.color = "lightGreen";
    }else if(randomNumber == 3){
        result.textContent = "Tie😕";
        result.style.color = "Yellow";
    }
}
rock.addEventListener("click", function(evt){
    choiceRock();
})
paper.addEventListener("click", function(evt){
    choicePaper();
})
scissor.addEventListener("click", function(evt){
    choiceScissor();
})