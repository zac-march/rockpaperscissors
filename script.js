const choices = ["rock", "paper", "scissors"]
// let input = ''
// while (input in choices == false){
//     input = prompt("Enter your choice!\nRock\nPaper\nScissors").toLowerCase()
//     console.log(input)
// }

input = prompt("Enter your choice!\nRock\nPaper\nScissors").toLowerCase()

let humanChoice = choices.indexOf(input)
let computerChoice = Math.floor(Math.random(0) * 3)

console.log(`You chose: ${choices[humanChoice]} (${humanChoice})\nComputer chose: ${choices[computerChoice]} (${computerChoice})`)

winningChoice = getWinner(humanChoice, computerChoice)
displayGameEndText()

function getWinner(humanChoice, computerChoice){
    if (humanChoice > computerChoice){
        if (humanChoice == 2 && computerChoice == 0){
            return computerChoice
        }
        else {
            return humanChoice
        }
    }

    else if (humanChoice < computerChoice) {
        if (computerChoice == 2 && humanChoice == 0){
            return humanChoice
        } else {
            return computerChoice
        }
    }
    
    return "Tie" 
}

function displayGameEndText() {
    if (winningChoice == 'Tie') {
        console.log(`Tie! ${choices[humanChoice]} ties with ${choices[humanChoice]}`)
    }
    else {
        losingChoice = computerChoice
        let endtext = "Win"
        if (computerChoice == winningChoice) { losingChoice = humanChoice; endtext = "Lose"} 
        console.log(`You ${endtext}! ${choices[winningChoice]} beats ${choices[losingChoice]}`)
    }
}

