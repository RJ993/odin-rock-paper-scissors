function getComputerChoice(){
    let compResult = Math.floor(Math.random()*3)
    if (compResult === 0){
    }else if (compResult === 1){
    }else if (compResult === 2){
    }
    return compResult
}

let humanScore = 0
let computerScore = 0

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const buttons = document.querySelectorAll("button")
const humanSelection = ['rock', 'paper', 'scissors']
const container = document.querySelector(".container")
const buttonsClass = document.querySelector(".buttons")

const scoreboard = document.createElement("div")
scoreboard.classList.add("scoreboard")

function rockPress(){
    rock.classList.add("press")
    playRound(humanSelection.at(0), getComputerChoice())
    scoreboard.textContent = `You - ${humanScore}, Computer - ${computerScore}`
    container.insertBefore(scoreboard, buttonsClass)
    return humanScore && computerScore
}

function paperPress(){
    paper.classList.add("press")
    playRound(humanSelection.at(1), getComputerChoice())
    scoreboard.textContent = `You - ${humanScore}, Computer - ${computerScore}`
    container.insertBefore(scoreboard, buttonsClass)
    return humanScore && computerScore
}

function scissorsPress(){
    scissors.classList.add("press")
    playRound(humanSelection.at(2), getComputerChoice())
    scoreboard.textContent = `You - ${humanScore}, Computer - ${computerScore}`
    container.insertBefore(scoreboard, buttonsClass)
    return humanScore && computerScore
}

function declareWinner(){
    if (humanScore > computerScore){
        console.log("You win!")
    }else if (humanScore < computerScore){
        console.log("You lost...")
    }
    rock.removeEventListener("click", rockPress)
    paper.removeEventListener("click", paperPress)
    scissors.removeEventListener("click", scissorsPress)
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice === 2) || (humanChoice == "scissors" && computerChoice === 1) || (humanChoice == "paper" && computerChoice === 0)){
        console.log("You win this round!")
        humanScore += 1
    }else if((humanChoice == "scissors" && computerChoice === 0) || (humanChoice == "rock" && computerChoice === 1) || (humanChoice == "paper" && computerChoice === 2)){
        console.log("You lose this round...")
        computerScore += 1
    }else if((humanChoice == "scissors" && computerChoice === 2) || (humanChoice == "rock" && computerChoice === 0) || (humanChoice == "paper" && computerChoice === 1)){
        console.log("Round tied.")
        humanScore += 0
        computerScore += 0

    }
    if(humanScore == 5 || computerScore == 5){
        declareWinner()
    }
    return humanScore && computerScore
  } 
        rock.addEventListener("click", rockPress)

        paper.addEventListener("click", paperPress)

        scissors.addEventListener("click", scissorsPress)

        function removeTransition(e){
            if(e.propertyName !== 'box-shadow') return;
            this.classList.remove("press")
        }

        buttons.forEach(button => button.addEventListener('transitionend', removeTransition))