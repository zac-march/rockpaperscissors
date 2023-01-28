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
let isRoundInProgress = false;

choiceButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(choices.indexOf(e.target.id))
        return
    });
});

function updateScore(isHumanWinner){
    isHumanWinner ? scores['human'] += 1 : scores['computer'] += 1
    
    textDivsDict['score'].textContent = `Human points: ${scores['human']}\nComputer points: ${scores['computer']}`
    
    for (key in scores){
        if (scores[key] == 5){
            textDivsDict['gameover'].textContent = `${key.toUpperCase()} WINS!`
            scores = {human: 0, computer: 0}
        }
    }
}

function playRound(humanChoice){
    if (isRoundInProgress){
        return
    }
    isRoundInProgress = true;
    
    computerChoice = Math.floor(Math.random() * 3)

    clearDisplay()

    let timeLeft = choices.length - 1;
    let roundStartTimer = function(){
        if(timeLeft < 0){
            matchStartTimerText.textContent = "vs";
            let isHumanWinner = null;
            if (humanChoice != computerChoice){
                isHumanWinner = getIsHumanWinner(humanChoice, computerChoice)
                updateScore(isHumanWinner) 
            }
            updateDisplay(isHumanWinner, humanChoice, computerChoice)
            isRoundInProgress = false;
        }
        else{
            matchStartTimerText.textContent = choices[timeLeft];
            timeLeft--;
            setTimeout(roundStartTimer, 100);
        }
    }
    roundStartTimer();
}


function clearDisplay() {
    matchStartTimerText.style.color = ""
    choiceDisplay[0].textContent = ""
    choiceDisplay[1].textContent = ""
    textDivsDict["result"].textContent = ""
    textDivsDict['gameover'].textContent = ""
}

function getIsHumanWinner(humanChoice, computerChoice){
    if (humanChoice == 2 && computerChoice == 0){
        return false
    }
    else if (computerChoice == 2 && humanChoice == 0){
        return true
    }
    return humanChoice > computerChoice
}

function updateDisplay(isHumanWinner, humanChoice, computerChoice) {

    choiceDisplay[0].textContent = choices[humanChoice].toUpperCase()
    choiceDisplay[1].textContent = choices[computerChoice].toUpperCase()

    if (isHumanWinner == null){
        textDivsDict["result"].textContent = `Tie! ${choices[humanChoice]} ties with ${choices[computerChoice]}`
        return
    }

    losingChoice = isHumanWinner ? computerChoice : humanChoice
    winningChoice = isHumanWinner ? humanChoice : computerChoice
    endtext = isHumanWinner ? "Win" : "Lose"

    textDivsDict["result"].textContent = `You ${endtext}! ${choices[winningChoice]} beats ${choices[losingChoice]}`
    
}

