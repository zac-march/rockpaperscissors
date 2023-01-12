let humanChoice = prompt("Enter your choice!\n1. Rock\n2. Paper\n3. Scissors")

let computerChoice = Math.floor(Math.random(5) * 3) + 1

console.log(humanChoice + " " + computerChoice)
