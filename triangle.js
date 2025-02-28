/* 
Make getComputerChoice
    Randomize the outcomes (outcomes should have EQUAL chance) of rock, paper, scissors with Math.random.
        We do that by assigning the results values less than 3 and make math random round down.
Make getHumanChoice
    Prompt the user
    User enters rock, paper, or scissors
    The entry shows in the console log
    The entry is case-insensitive
    Any other entry will not be entered into console log.
For the scoring system
    Give it an initial value of zero
    Make it increment by 1 per win
*/

function getComputerChoice(){
    let compResult = Math.floor(Math.random()*3)
    if (compResult === 0){
        console.log("rock")
    }else if (compResult === 1){
        console.log("paper")
    }else if (compResult === 2){
        console.log("scissors")
    }
    return compResult
}

function getHumanChoice(){
    let humResult1 = prompt("Rock, Paper, or Scissors?", "")
    let humResult2 = humResult1.toLowerCase("")
    if (humResult2 == "rock" || humResult2 == "paper" || humResult2 == "scissors"){
        console.log(humResult2)
    }else{
        alert("Please refresh the page!")
    }
    return humResult2
}

let humanScore = 0
let computerScore = 0

function playGame(){
    function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice === 2) || (humanChoice == "scissors" && computerChoice === 1) || (humanChoice == "paper" && computerChoice === 0)){
        console.log("You win this round!")
        humanScore += 1
    }else if((humanChoice == "scissors" && computerChoice === 0) || (humanChoice == "rock" && computerChoice === 1) || (humanChoice == "paper" && computerChoice === 2)){
        console.log("You lose this round...")
        computerScore += 1
    }else if((humanChoice == "scissors" && computerChoice === 2) || (humanChoice == "rock" && computerChoice === 0) || (humanChoice == "paper" && computerChoice === 1)){
        console.log("Round tied.")
        humanScore += 1
        computerScore += 1
    }
    return humanScore && computerScore
  }
  
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
  
        playRound(humanSelection, computerSelection);
        console.log("You - " + humanScore, "Computer - " + computerScore)
        return humanScore && computerScore
}

for (let i = 0; i < 5; i++){
    playGame()
}

function declareWinner(){
    if (humanScore > computerScore){
        console.log("You win!")
    }else if (humanScore < computerScore){
        console.log("You lost...")
    }else if (humanScore === computerScore){
        console.log ("Tie!")
    }
}

declareWinner()