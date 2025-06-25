// Scelte del computer
function getComputerChoice() {
  const random = Math.random();
  if (random < 0.34) {
    return "sasso";
  } else if (random < 0.67) {
    return "carta";
  } else {
    return "forbice";
  }
}

// Punteggio
let humanScore = 0;
let computerScore = 0;

// Formatta con prima lettera maiuscola
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Gioca un singolo round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Pareggio!";
  }

  if (
    (humanChoice === "sasso" && computerChoice === "forbice") ||
    (humanChoice === "carta" && computerChoice === "sasso") ||
    (humanChoice === "forbice" && computerChoice === "carta")
  ) {
    humanScore++;
    return `Hai VINTO! ${capitalize(humanChoice)} batte ${capitalize(computerChoice)}.`;
  } else {
    computerScore++;
    return `Hai perso! ${capitalize(computerChoice)} batte ${capitalize(humanChoice)}.`;
  }
}

// Seleziono i pulsanti e le aree dove mostrare risultati e punteggio
const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (humanScore === 5 || computerScore === 5) return; // partita finita

    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    const message = playRound(humanChoice, computerChoice);

    resultDiv.textContent = message;
    scoreDiv.textContent = `Punteggio — Tu: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
      const finalMsg = humanScore === 5 ? "🏆 Hai vinto la partita!" : "😞 Hai perso la partita.";
      alert(finalMsg);
    }
  });
});
