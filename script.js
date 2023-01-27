const choices = ["rock", "paper", "scissors"]
const choiceButtons = document.querySelectorAll('.choice')
const choiceDisplay = document.querySelectorAll('.display-choice')

let textDivsDict = {}
let textDivs = document.querySelectorAll('.display')
for (div in textDivs){
    textDivsDict[textDivs[div].id] = textDivs[div]
}

let scores = {human: 0, computer: 0}

choiceButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(choices.indexOf(e.target.id))
        return
    });
});

function updateScore(isHumanWinner){
    if (isHumanWinner){scores['human'] += 1}
    else {scores['computer'] += 1}
    
    textDivsDict['score'].textContent = `Human points: ${scores['human']}\nComputer points: ${scores['computer']}`
    
    for (key in scores){
        if (scores[key] == 5){
            textDivsDict['gameover'].textContent = `${key.toUpperCase()} WINS!`
            
        }
    }
}

function playRound(humanChoice) {
    computerChoice = Math.floor(Math.random() * 3)

    textDivsDict['choice'].textContent = `You chose: ${choices[humanChoice]} (${humanChoice})\nComputer chose: ${choices[computerChoice]} (${computerChoice})`

    let isHumanWinner = null;
    if (humanChoice != computerChoice){
        isHumanWinner = getIsHumanWinner(humanChoice, computerChoice)
        updateScore(isHumanWinner)
    }
    updateDisplay(isHumanWinner, humanChoice, computerChoice)
}

function updateDisplay(isHumanWinner, humanChoice, computerChoice){
    updateResultDisplay(isHumanWinner, humanChoice, computerChoice)
    updateChoiceDisplay(humanChoice, computerChoice)
}

function updateChoiceDisplay(humanChoice, computerChoice) {
    choiceDisplay[0].textContent = choices[humanChoice].toUpperCase()
    choiceDisplay[1].textContent = choices[computerChoice].toUpperCase()
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

function updateResultDisplay(isHumanWinner, humanChoice, computerChoice) {

    if (isHumanWinner == null){
        textDivsDict["result"].textContent = `Tie! ${choices[humanChoice]} ties with ${choices[computerChoice]}`
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

    textDivsDict["result"].textContent = `You ${endtext}! ${choices[winningChoice]} beats ${choices[losingChoice]}`
    
}

