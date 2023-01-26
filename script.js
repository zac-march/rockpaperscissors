const choices = ["rock", "paper", "scissors"]
const choiceButtons = document.querySelectorAll('.choice')
let score = [0, 0]

choiceButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(choices.indexOf(e.target.id))
        return
    });
});

console.log(choiceButtons)


function updateScore(isHumanWinner){
    if (isHumanWinner){score[0] = score[0] + 1}
    else {score[1] = score[1] + 1}
    console.log(`Human points: ${score[0]}\nComputer points: ${score[1]}`)
}

function playRound(humanChoice) {
    computerChoice = Math.floor(Math.random() * 3)

    console.log(`You chose: ${choices[humanChoice]} (${humanChoice})\nComputer chose: ${choices[computerChoice]} (${computerChoice})`)

    let winner;
    if (humanChoice != computerChoice){
        let isHumanWinner = getIsHumanWinner(humanChoice, computerChoice)
        displayResult(winner, humanChoice, computerChoice)
        updateScore(isHumanWinner)
    }
    else {
        console.log(`Tie! ${choices[humanChoice]} ties with ${choices[computerChoice]}`)
    }
}

function getIsHumanWinner(humanChoice, computerChoice){
    if (humanChoice > computerChoice){
        if (humanChoice == 2 && computerChoice == 0){
            return false
        }
        else {
            return true
        }
    }

    else if (humanChoice < computerChoice) {
        if (computerChoice == 2 && humanChoice == 0){
            return true
        } else {
            return false
        }
    }
}

function displayResult(winner, humanChoice, computerChoice) {
    losingChoice = computerChoice;
    winningChoice = humanChoice;
    endtext = "Win";

    if (winner == 'computer') {
        losingChoice = humanChoice;
        winningChoice = computerChoice;
        endtext = "Lose";
    }

    console.log(`You ${endtext}! ${choices[winningChoice]} beats ${choices[losingChoice]}`)
    
}

