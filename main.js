let humanScore=0
let computerScore=0
const hud=document.querySelector(".player-hud")
const humanScene=document.querySelector(".human")
const computerScene=document.querySelector(".computer")
const resultScene=document.querySelector(".result")
const finalScene=document.querySelector(".final-result")
const finalScore=document.querySelector(".final-text")
const score=document.querySelector(".score")
const computerWord=document.querySelector(".computer-choice-word")
const computerImg=document.querySelector(".computer-choice")
const result=document.querySelector(".result-text");
function getComputerChoice(){
    const value= Math.floor(Math.random()*3)
    if(value==0){
        computerWord.textContent="Rock"

        computerImg.src="images/rock.png"
        return "rock"
    }else if(value==1){
        computerWord.textContent="Paper"

        computerImg.src="images/paper.png"
        return "paper"
    }else{
        computerWord.textContent="Scissors"

        computerImg.src="images/scissors.png"
        return "scissors"

    }
}
const buttons=document.querySelectorAll('.option');
    buttons.forEach(boton=>{
        boton.addEventListener("click",()=>{
            buttons.forEach(b => b.classList.remove("active"));
            boton.classList.add("active");
        })
    })
const screens=document.querySelectorAll(".screen");

function getHumanChoice(){
    const value=document.querySelector(".option.active");
    if(value===null){
        return null
    }else{
        return value.dataset.info;
    }
}
function unableScreens(){
    screens.forEach(screen=>{
        screen.classList.remove("active")
        })
}
function playRound(humanChoice,computerChoice){
    switch (computerChoice){
        case 'rock':
            if(humanChoice=="rock"){
                result.textContent="Draw!"
            }else if(humanChoice=="paper"){
                humanScore++;
                result.textContent="You win!"

            }
            else{
                result.textContent="You Lose"
                computerScore++;
            }
            break;
        case 'paper':
            if(humanChoice=="rock"){
                result.textContent="You Lose"
                computerScore++;

            }else if(humanChoice=="paper"){
                result.textContent="Draw!"
            }
            else{
                result.textContent="You win!"
                humanScore++;
            }
            break;
        case 'scissors':
            if(humanChoice=="rock"){
                result.textContent="You win!"
                humanScore++;

            }else if(humanChoice=="paper"){
                computerScore++;
                result.textContent="You Lose"
            }
            else{
                result.textContent="Draw!"
            }
            break;
    }

}
function playGame(){
    const activeButton=getHumanChoice()
    const computerChoice=getComputerChoice()
    
    if(activeButton=== null){
        alert("Choose an option")
        return
    }else{
        
        playRound(activeButton,computerChoice)
                score.textContent=`Human: ${humanScore} - Computer: ${computerScore}`

        unableScreens();
        computerScene.classList.add("active");
         if(humanScore===5 || computerScore===5){
            setTimeout(()=>{
                unableScreens();

                if(computerScore > humanScore){
                    finalScore.textContent="YOU ARE A LOSER :("
                } else if(humanScore > computerScore){
                    finalScore.textContent="ABSOLUTE WINNER!"
                } else {
                    finalScore.textContent="Draw, really?"
                }

                finalScene.classList.add("active");
            }, 3000); 

            return; 
        }
        setTimeout(()=>{
            unableScreens();
            resultScene.classList.add("active");
        },4000);

        setTimeout(()=>{
            unableScreens();
            

            humanScene.classList.add("active");
        },6000);
        
    }
    
}
const sentButton=document.querySelector('.submit-choice');
sentButton.addEventListener("click",playGame)
