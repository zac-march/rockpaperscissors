const choices = ["rock", "paper", "scissors"]
// let input = ''
// while (input in choices == false){
//     input = prompt("Enter your choice!\nRock\nPaper\nScissors").toLowerCase()
//     console.log(input)
// }

game()


function game(){
    score = [0, 0]
    for(i = 0; i < 5; i++){
        let isHumanWinner = playRound()
        if (isHumanWinner){score[0] = score[0] + 1}
        else {score[1] = score[1] + 1}
    }
    console.log(`Game End!\nHuman points: ${score[0]}\nComputer points: ${score[1]}`)
}

function playRound() {
    let winningChoice = 'Tie'
    let computerChoice = 0;
    while (winningChoice == 'Tie') {
        input = prompt("Enter your choice!\nRock\nPaper\nScissors").toLowerCase()

        let humanChoice = choices.indexOf(input)
        computerChoice = Math.floor(Math.random() * 3)

        console.log(`You chose: ${choices[humanChoice]} (${humanChoice})\nComputer chose: ${choices[computerChoice]} (${computerChoice})`)

        winningChoice = getWinningChoice(humanChoice, computerChoice)
        displayGameEndText(winningChoice, humanChoice, computerChoice)
    }

    if (computerChoice == winningChoice) { 
        return false
    } else {
        return true
    }
}

function getWinningChoice(humanChoice, computerChoice){
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

function displayGameEndText(winningChoice, humanChoice, computerChoice) {
    if (winningChoice == 'Tie') {
        console.log(`Tie! ${choices[humanChoice]} ties with ${choices[humanChoice]}`)
    } else {
        losingChoice = computerChoice
        let endtext = "Win"
        if (computerChoice == winningChoice) { losingChoice = humanChoice; endtext = "Lose"} 
        console.log(`You ${endtext}! ${choices[winningChoice]} beats ${choices[losingChoice]}`)
    }
}

