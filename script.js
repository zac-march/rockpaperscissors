let input = prompt("Enter your choice!\nRock\nPaper\nScissors").toLowerCase()

let choices = ["rock", "paper", "scissors"]
let humanChoice = choices.indexOf('input') + 1

let computerChoice = Math.floor(Math.random(5) * 3) + 1

console.log(humanChoice + " " + computerChoice)



if (humanChoice > computerChoice){
    if (humanChoice == 3 && computerChoice == 1){
        console.log("Computer wins!")
    }
    else{
        console.log("Human wins!")
    }
}

else {
    if (computerChoice == 3 && humanChoice == 1){
        console.log("Human wins!")
    }
    else if (computerChoice == humanChoice) {
        console.log("Its a tie!")
    }
    else{
        console.log("Computer wins!")
    }
}