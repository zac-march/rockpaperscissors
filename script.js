const choices = ["rock", "paper", "scissors"]
// let input = ''
// while (input in choices == false){
//     input = prompt("Enter your choice!\nRock\nPaper\nScissors").toLowerCase()
//     console.log(input)
// }

input = prompt("Enter your choice!\nRock\nPaper\nScissors").toLowerCase()

let humanChoice = choices.indexOf(input) + 1
let computerChoice = Math.floor(Math.random(5) * 3) + 1

console.log(`You chose: ${choices[humanChoice-1]} (${humanChoice})\nComputer chose: ${choices[computerChoice-1]} (${computerChoice})`)

function getWinner(humanChoice, computerChoice){
    if (humanChoice > computerChoice){
        if (humanChoice == 3 && computerChoice == 1){
            return computerChoice
        }
        else {
            return humanChoice
        }
    }

    else if (humanChoice < computerChoice) {
        if (computerChoice == 3 && humanChoice == 1){
            return humanChoice
        } else {
            return computerChoice
        }
    }
    
    return "Tie" 
}


winningChoice = getWinner(humanChoice, computerChoice)
if (winningChoice == 'Tie') {
    console.log(`Tie! ${choices[humanChoice - 1]} ties with ${choices[humanChoice - 1]}`)
}
else{
    losingChoice = computerChoice
    let endtext = "Win"
    if (computerChoice == winningChoice) {losingChoice = humanChoice; endtext = "Lose"}
    console.log(`You ${endtext}! ${choices[winningChoice - 1]} beats ${choices[losingChoice - 1]}`)
}
