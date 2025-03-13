const humanSelection = ['Rock', 'Paper', 'Scissors']
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const buttons = document.querySelectorAll("button") // Button IDs for choice

const displayChoice = document.createElement("div")
displayChoice.classList.add("displayChoice") // see playRound function

const container = document.querySelector(".container")
const buttonsClass = document.querySelector(".buttons") // Nodes to append child

const scoreboard = document.createElement("div")
scoreboard.classList.add("scoreboard") // see press functions

const roundWinner = document.createElement("div")
roundWinner.classList.add("roundWinner") // see playRound function

const winner = document.createElement("div")
winner.classList.add("winner") // see declareWinner function

let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let compResult = Math.floor(Math.random()*3)
    if (compResult === 0){
    }else if (compResult === 1){
    }else if (compResult === 2){
    }
    return compResult
}

function declareWinner(){
    if (humanScore > computerScore){
        winner.textContent = "You win! Refresh the page for another game."
        container.appendChild(winner)
    }else if (humanScore < computerScore){
        winner.textContent = "You lost... Refresh the page for another game."
        container.appendChild(winner)
    }
    rock.removeEventListener("click", rockPress)
    paper.removeEventListener("click", paperPress)
    scissors.removeEventListener("click", scissorsPress)
}

function playRound(humanChoice, computerChoice) {

    // This below is here to determine round winner

    if ((humanChoice == "Rock" && computerChoice === 2) || (humanChoice == "Scissors" && computerChoice === 1) || (humanChoice == "Paper" && computerChoice === 0)){
        roundWinner.textContent = "You win this round!"
        container.appendChild(roundWinner)
        humanScore += 1
    }else if((humanChoice == "Scissors" && computerChoice === 0) || (humanChoice == "Rock" && computerChoice === 1) || (humanChoice == "Paper" && computerChoice === 2)){
        roundWinner.textContent = "You lose this round..."
        container.appendChild(roundWinner)
        computerScore += 1
    }else if((humanChoice == "Scissors" && computerChoice === 2) || (humanChoice == "Rock" && computerChoice === 0) || (humanChoice == "Paper" && computerChoice === 1)){
        roundWinner.textContent = "Round tied"
        container.appendChild(roundWinner)
        humanScore += 0
        computerScore += 0

    }
    
    // This below is here to display choices

    if (computerChoice === 0){
        let displayComputerChoice = 'Rock'
        displayChoice.textContent = `You - ${humanChoice} , Computer - ${displayComputerChoice}`
        container.insertBefore(displayChoice, buttonsClass)
    }else if (computerChoice === 1){
        let displayComputerChoice = 'Paper'
        displayChoice.textContent = `You - ${humanChoice} , Computer - ${displayComputerChoice}`
        container.insertBefore(displayChoice, buttonsClass)
    }else if (computerChoice === 2){
        let displayComputerChoice = 'Scissors'
        displayChoice.textContent = `You - ${humanChoice} , Computer - ${displayComputerChoice}`
        container.insertBefore(displayChoice, buttonsClass)
    }

    // This is to stop the game and declare the winner after a player gets 5 points

    if(humanScore == 5 || computerScore == 5){
        declareWinner()
    }
    return humanScore && computerScore
  } 

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
 
function removeTransition(e){
    if(e.propertyName !== 'box-shadow') return; // Skips if "box-shadow" isn't part of class
    this.classList.remove("press")
}
        rock.addEventListener("click", rockPress)

        paper.addEventListener("click", paperPress)

        scissors.addEventListener("click", scissorsPress)

        buttons.forEach(button => button.addEventListener('transitionend', removeTransition))