// remove for loop and do basic i = and set the text to x or o based on number

let currentPlayer = 'X'
const playerX = 'X'
const playerO = 'O'
const board = ['', '', '', '', '', '', '', '', '']
const thePlayer = currentPlayer

const trying = (event) => {
  const target = $(event.target)
  if (target.text() === '') {
    switchPlayer()
    checkForWin(thePlayer)
  } else {
    console.log('click an empty spot')
  }
}

const switchPlayer = () => {
  currentPlayer = currentPlayer === playerX ? playerO : playerX
  if (currentPlayer === playerX) {
    $(event.currentTarget).text(playerO)
    board[event.currentTarget.id] = 'O'
  } else {
    $(event.currentTarget).text(playerX)
    board[event.currentTarget.id] = 'X'
  }
}

// 0 | 1 | 2
// ---------
// 3 | 4 | 5
// ---------
// 6 | 7 | 8

const combos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const checkForWin = () => {
  for (let i = 0; i < combos.length; i++) {
    if (board[combos[i][0]] === 'X' && board[combos[i][1]] === 'X' && board[combos[i][2]] === 'X') {
      console.log('win')
    }
  }
}

module.exports = {
  trying
}
