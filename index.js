let firstMove = true;
let currentPlayer;
let gameButtons = document.querySelectorAll("#game-grid button");

function playMove() {
  // choose a player at random for the first move
  if(firstMove) {
    currentPlayer = Math.round(Math.random()) === 0 ? 'O' : 'X';
    firstMove = false;
  }
  else {
    if(this.innerText)
      return;
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
  }

  this.innerText = currentPlayer;
}

gameButtons.forEach(button => button.onclick = playMove);

document.querySelector("#replay-button").onclick = () => {
  gameButtons.forEach(button => button.innerText = '');
};
