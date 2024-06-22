let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let result = document.querySelector("h3");
console.log(result.textContent);
rock.addEventListener("click", function(evt){
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
})
paper.addEventListener("click", function(evt){
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
})
scissor.addEventListener("click", function(evt){
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
})