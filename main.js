let humanScore=0
let computerScore=0

function getComputerChoice(){
    return Math.floor(Math.random()*3)
}

function getHumanChoice(){
    const choice=prompt("Choose an option: ")
    return choice
}

function playRound(humanChoice,computerChoice){
    console.log("Actual Score:")
    console.log("Human: ",humanScore,"- Computer: ",computerScore)

    console.log("Player's choice: ",humanChoice)
    let stringChoice=""
    if(computerChoice==0){
        stringChoice="rock"
    }else if(computerChoice==1){
        stringChoice="paper"
    }else{
        stringChoice="scissors"

    }
    console.log("Computer's choice: ", stringChoice)

    switch (computerChoice){
        case 0:
            if(humanChoice=="rock"){
                console.log("Draw!")

            }else if(humanChoice=="paper"){
                console.log("You Win! Paper beats Rock")
                humanScore++;

            }
            else{
                console.log("You lose! Rock beats Scissors")
                computerScore++;
            }
            break;
        case 1:
            if(humanChoice=="rock"){
                console.log("You lose! Paper beats Rock")
                computerScore++;

            }else if(humanChoice=="paper"){
                console.log("Draw!")

            }
            else{
                console.log("You Win! Scissors beats Paper")
                humanScore++;
            }
            break;
        case 2:
            if(humanChoice=="rock"){
                console.log("You Win! Rock beats Scissors")
                humanScore++;

            }else if(humanChoice=="paper"){
                console.log("You Lose! Scissors beats Paper")
                computerScore++;

            }
            else{
                console.log("Draw!")
            }
            break;
    }
}

function playGame(){
    for(let i=0;i<5;i++){
        console.log("Game ",i+1)
        playRound(getHumanChoice().toLowerCase(),getComputerChoice())
    }
    console.log("Final Score:")
    console.log("Human: ",humanScore,"- Computer: ",computerScore)
    if(humanScore>computerScore){
        console.log("Human wins!")
    }else if(humanScore<computerScore){
        console.log("Computer wins!")
    }else{
        console.log("Draw!")
    }
}

playGame();