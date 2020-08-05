const prompt = require('prompt');

let board = {};
let winner = false;
let count = 0;
let player = 'X';
for (var i = 1; i <= 9; i++) {
  board[i] = i;
};

let checkWinner = () => {
  for (var i = 0; i < 3; i++) {
    let x = 1 + (i * 3);
    let row = [x, x+1, x+2];
    let col = [i+1, i+4, i+7];

    let checkPlayer = (player, row, col) => {
      if (board[row[0]] == player && board[row[1]] == player && board[row[2]] == player ) {
        return true;
      } else if (board[col[0]] == player && board[col[1]] == player && board[col[2]] == player ) {
        return true;
      } else {
        return false;
      }
    }
    if (checkPlayer('X', row, col)) {
      return "Player X won!"
    } else if (checkPlayer('O', row, col)) {
      return "Player O won!"
    } else {
      return null
    }
  }
}

while(!winner && count < 9) {
  let display = `TicTacToe! \n` +
  `${board[1]} | ${board[2]} | ${board[3]} \n` +
  `---------n` +
  `${board[4]} | ${board[5]} | ${board[6]} \n` +
  `---------n` +
  `${board[7]} | ${board[8]} | ${board[9]} \n` +

  console.log(display);
  console.log(`Player ${player}'s turn`);
  prompt.start();
  prompt.get(['position'], function (err, result) {
    let play = result.position;
    board[play] = player;
    let result = checkWinner;
    if (result !== null) {
      winner = true;
    } else {
      player = (player == "X") ? "O" : "X";
    }
  })
  count++;
}
