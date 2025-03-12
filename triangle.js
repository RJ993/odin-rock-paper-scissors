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
    return humanScore && computerScore
  } 
  
    const humanSelection = ['rock', 'paper', 'scissors']

        const rock = document.querySelector("#rock")
        const paper = document.querySelector("#paper")
        const scissors = document.querySelector("#scissors")
        const buttons = document.querySelectorAll("button")




        rock.addEventListener("click", function (e){
            rock.classList.add("press")
            playRound(humanSelection.at(0), getComputerChoice())
            console.log("You - " + humanScore, "Computer - " + computerScore)
            return humanScore && computerScore
        })
        paper.addEventListener("click", function (e){
            paper.classList.add("press")
            playRound(humanSelection.at(1), getComputerChoice())
            console.log("You - " + humanScore, "Computer - " + computerScore)
            return humanScore && computerScore
        })
        scissors.addEventListener("click", function (e){
            scissors.classList.add("press")
            playRound(humanSelection.at(2), getComputerChoice())
            console.log("You - " + humanScore, "Computer - " + computerScore)
            return humanScore && computerScore
        })

        function removeTransition(e){
            if(e.propertyName !== 'box-shadow') return;
            this.classList.remove("press")
        }

        buttons.forEach(button => button.addEventListener('transitionend', removeTransition))


function declareWinner(){
    if (humanScore > computerScore){
        console.log("You win!")
    }else if (humanScore < computerScore){
        console.log("You lost...")
    }
}

declareWinner()