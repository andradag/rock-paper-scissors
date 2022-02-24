const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

// get the user choice using prompt
const getUserChoice = function () {
  return "R";
};

// get the random computer choice
const getComputerChoice = function () {
  return "P";
};

// for the 2 player choices check game logic
const gameLogic = function (player1, player2) {
  return "win";
};

//update the player 1's scores depending on the game outcome
const updateScore = function (gameOutcome) {
  //update wind if win
  //update losses if lose
  // update ties if tie
};

// display the score of player in the console logs
const displayScore = function () {
  //console log the score
  console.log(
    "Score: W - " +
      score.wins +
      " | L - " +
      score.losses +
      " | T - " +
      score.ties
  );
};

const playGame = function () {
  // get the player 1 choice
  const player1Choice = getUserChoice();
  console.log("player1Choice", player1Choice);

  // get the computer choice
  const computerChoice = getComputerChoice();
  console.log("computerChoice", computerChoice);

  // feed the player choice and computer choice to game logic
  const gameOutcome = gameLogic(player1Choice, computerChoice);
  console.log("gameOutcome", gameOutcome);

  // update the scores
  updateScore(gameOutcome);

  // display the scores
  displayScore();
};

// present the user with a confirm model yes/no
const playAgain = function () {
  return false;
};
// declare a variable to track game in progress

let isGameInProgress = true;

while (isGameInProgress) {
  // start the game by calling this function
  playGame();

  // ask the user if they want to continue
  const isPlayAgain = playAgain();

  // is playAgain is false set isGameInProgress to false
  if (!isPlayAgain) {
    isGameInProgress = false;
  }
}
