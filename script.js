const choices = ["rock", "paper", "scissors"]
const choiceButtons = document.querySelectorAll('.choice')
const textDivs = document.querySelectorAll('.display')

const RESULT_INDEX = 0;
const CHOICE_INDEX = 1;
const SCORE_INDEX = 2;
const GAMEOVER_INDEX = 3;

const HUMAN_SCORE_INDEX = 2
const COMPUTER_SCORE_INDEX = 1

let scores = {you: 0, computer: 0}

choiceButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(choices.indexOf(e.target.id))
        return
    });
});

function updateScore(isHumanWinner){
    if (isHumanWinner){scores['you'] += 1}
    else {scores['computer'] += 1}
    
    textDivs[SCORE_INDEX].textContent = `Human points: ${scores['you']}\nComputer points: ${scores['computer']}`
    
    for (key in scores){
        if (scores[key] == 5){

            textDivs[GAMEOVER_INDEX].textContent = `${key} wins!`
            
        }
    }
}

function playRound(humanChoice) {
    computerChoice = Math.floor(Math.random() * 3)

    textDivs[CHOICE_INDEX].textContent = `You chose: ${choices[humanChoice]} (${humanChoice})\nComputer chose: ${choices[computerChoice]} (${computerChoice})`

    let isHumanWinner = null;
    if (humanChoice != computerChoice){
        isHumanWinner = getIsHumanWinner(humanChoice, computerChoice)
        updateScore(isHumanWinner)
    }
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
        textDivs[RESULT_INDEX].textContent = `Tie! ${choices[humanChoice]} ties with ${choices[computerChoice]}`
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

    textDivs[RESULT_INDEX].textContent = `You ${endtext}! ${choices[winningChoice]} beats ${choices[losingChoice]}`
    
}

