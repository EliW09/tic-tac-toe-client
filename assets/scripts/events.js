const gEvent = require('./gameevents.js')
const api = require('./gameapi.js')
const store = require('./store.js')

const board = ['', '', '', '', '', '', '', '', ''] // the game board as an array
let currentPlayer = 'X' // first turn
const playerX = 'X'
const playerO = 'O'
let gameOver = false

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

const resetBoard = () => {
  $('#0').empty()
  $('#1').empty()
  $('#2').empty()
  $('#3').empty()
  $('#4').empty()
  $('#5').empty()
  $('#6').empty()
  $('#7').empty()
  $('#8').empty()
  gameOver = false
  currentPlayer = 'X'
  $('#message').empty()
  for (let i = 0; i < board.length; i++) {
    board[i] = ''
  }
  gEvent.newGame()
}

const showGame = () => {
  $('.gamecontainer').show()
  resetBoard()
}

const movement = () => {
  if (currentPlayer === playerO) {
    $(event.currentTarget).text(playerO)
    board[event.currentTarget.id] = 'O'
    checkForWin(currentPlayer)
    checkForTie()
    let cId = event.currentTarget.id
    let player = 'O'
    let isGameOver = gameOver
    api.updateMoves(cId, player, isGameOver)
  }
  if (currentPlayer === playerX) {
    $(event.currentTarget).text(playerX)
    board[event.currentTarget.id] = 'X'
    checkForWin(currentPlayer)
    checkForTie()
    let cId = event.currentTarget.id
    let player = 'X'
    let isGameOver = gameOver
    api.updateMoves(cId, player, isGameOver)
  }
}

const switchPlayer = () => { // the switch function that keeps rotating turns and sets the set turn on board and in array
  if (currentPlayer === playerO) {
  } else {
  }
  currentPlayer = currentPlayer === playerX ? playerO : playerX
}

const checkForWin = (thePlayer) => {
  for (let i = 0; i < combos.length; i++) {
    // console.log('in check for win and the player is ', thePlayer)
    if (board[combos[i][0]] === thePlayer && board[combos[i][1]] === thePlayer && board[combos[i][2]] === thePlayer) {
      $('#message').text('Player ' + thePlayer + ' has won!')
      gameOver = true
    }
  }
}

const checkForTie = () => {
  if ($('#0').text() && $('#1').text() && $('#2').text() && $('#3').text() && $('#4').text() && $('#5').text() && $('#6').text() && $('#7').text() && $('#8').text() !== '') {
    $('#message').text("It's a tie!")
    gameOver = true
  }
}

const main = (event) => { // the main function checking if a cell is empty and if so runs turn movement and wincheck
  const target = $(event.target)
  if (gameOver === false) {
    if (target.text() === '') {
      movement()
      switchPlayer()
    } else {
      $('#message').text('Select an empty cell.')
    }
  }
}

module.exports = {
  main,
  resetBoard,
  showGame
}
