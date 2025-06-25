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

// Scelte dell'utente
function getHumanChoice() {
  const input = prompt("Scegli: sasso, carta o forbice");

  if (input === null) {
    alert("Hai annullato il gioco.");
    throw new Error("Gioco interrotto dall'utente");
  }

  return input.toLowerCase(); // converte l’input in minuscolo
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
  console.log(`Tu: ${humanChoice} | Computer: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("Pareggio!");
    return;
  }

  if (
    (humanChoice === "sasso" && computerChoice === "forbice") ||
    (humanChoice === "carta" && computerChoice === "sasso") ||
    (humanChoice === "forbice" && computerChoice === "carta")
  ) {
    console.log(`Hai VINTO! ${capitalize(humanChoice)} batte ${capitalize(computerChoice)}.`);
    humanScore++;
  } else {
    console.log(`Hai perso! ${capitalize(computerChoice)} batte ${capitalize(humanChoice)}.`);
    computerScore++;
  }
}

// Gioca l’intero gioco (5 round)
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Round ${i} ---`);
    const humanChoice = getHumanChoice();

    if (
      humanChoice !== "sasso" &&
      humanChoice !== "carta" &&
      humanChoice !== "forbice"
    ) {
      console.log("Scelta non valida. Scrivi solo sasso, carta o forbice.");
      i--; // ripeti il round
      continue;
    }

    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Punteggio: Tu ${humanScore} - Computer ${computerScore}`);
  }

  console.log("\n--- RISULTATO FINALE ---");
  let finalMessage = "";
  if (humanScore > computerScore) {
    finalMessage = "🏆 Hai vinto la partita!";
  } else if (humanScore < computerScore) {
    finalMessage = "😞 Hai perso la partita.";
  } else {
    finalMessage = "🤝 La partita è in pareggio.";
  }
  console.log(finalMessage);
  alert(finalMessage);
}

// Avvia il gioco
playGame();
