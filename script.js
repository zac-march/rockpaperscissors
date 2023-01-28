const choices = ["rock", "paper", "scissors"]
const choiceButtons = document.querySelectorAll('.choice')
const choiceDisplay = document.querySelectorAll('.display-choice')
const matchStartTimerText = document.querySelector('#match-start-text')

let timeLeft = 3
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

    let isHumanWinner = null;
    if (humanChoice != computerChoice){
        isHumanWinner = getIsHumanWinner(humanChoice, computerChoice)
        updateScore(isHumanWinner)
    }
    beginMatchStartTimer(isHumanWinner, humanChoice, computerChoice)
}

function beginMatchStartTimer(isHumanWinner, humanChoice, computerChoice){
    clearDisplay()
    let timeLeft = 2;
    let matchStartTimer = function(){
        if(timeLeft <= -1){
            matchStartTimerText.textContent = "vs";
            updateDisplay(isHumanWinner, humanChoice, computerChoice)
        }
        else{
            matchStartTimerText.textContent = choices[timeLeft];
            timeLeft -= 1;
            setTimeout(matchStartTimer, 500);
        }
    }
    matchStartTimer();
}


function clearDisplay() {
    matchStartTimerText.textContent = ""
    choiceDisplay[0].textContent = ""
    choiceDisplay[1].textContent = ""
    textDivsDict["result"].textContent = ""
    textDivsDict['choice'].textContent = ""
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

function updateDisplay(isHumanWinner, humanChoice, computerChoice) {
    textDivsDict['choice'].textContent = `You chose: ${choices[humanChoice]} (${humanChoice})\nComputer chose: ${choices[computerChoice]} (${computerChoice})`

    choiceDisplay[0].textContent = choices[humanChoice].toUpperCase()
    choiceDisplay[1].textContent = choices[computerChoice].toUpperCase()

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

