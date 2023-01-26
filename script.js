const choices = ["rock", "paper", "scissors"]
const choiceButtons = document.querySelectorAll('.choice')
const resultDiv = document.querySelector('#result')
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

    let isHumanWinner = null;
    if (humanChoice != computerChoice){
        isHumanWinner = getIsHumanWinner(humanChoice, computerChoice)
        updateScore(isHumanWinner)
    }
    console.log(isHumanWinner)
    displayResult(isHumanWinner, humanChoice, computerChoice)
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

function displayResult(isHumanWinner, humanChoice, computerChoice) {

    if (isHumanWinner == null){
        resultDiv.textContent = `Tie! ${choices[humanChoice]} ties with ${choices[computerChoice]}`
        return
    }

    losingChoice = computerChoice;
    winningChoice = humanChoice;
    endtext = "Win";

    if (!isHumanWinner) {
        losingChoice = humanChoice;
        winningChoice = computerChoice;
        endtext = "Lose";
    }

    resultDiv.textContent = `You ${endtext}! ${choices[winningChoice]} beats ${choices[losingChoice]}`
    
}

