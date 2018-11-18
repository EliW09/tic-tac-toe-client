const gEvent = require('./api/game/gameevents.js')
const api = require('./api/game/gameapi.js')

const board = ['', '', '', '', '', '', '', '', ''] // the game board as an array
let currentPlayer = 'X' // first turn
const playerX = 'X'
const playerO = 'O'
let gameOver = false
let won = false
let aiToggle = false

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

const starthide = () => {
  $('#acc').hide()
  $('#goBack').hide()
  $('#theIn').hide()
  $('.gamecontainer').hide()
  $('.account-page').hide()
  $('#gamediv').hide()
}

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
  won = false
  currentPlayer = 'X'
  $('#message').empty()
  for (let i = 0; i < board.length; i++) {
    board[i] = ''
  }
  gEvent.newGame()
  $('#message').text("Player X's turn.")
}

const showGame = () => {
  $('.gamecontainer').show()
  disableAi()
  resetBoard()
}

const showGameAi = () => {
  $('.gamecontainer').show()
  enableAi()
  resetBoard()
}

const enableAi = () => {
  aiToggle = true
}

const disableAi = () => {
  aiToggle = false
}

const basicAi = () => {
  currentPlayer = playerO
  const min = 0
  const max = 8
  const apiMove = Math.floor(Math.random() * (max - min) + min)
  console.log(apiMove)

  if (currentPlayer === playerO) {
    if (board[apiMove] === '') {
      if (apiMove === 0) {
        $('#0').text('O')
        board[0] = 'O'
        checkForWin(playerO)
        checkForTie()
        const cId = apiMove
        const player = 'O'
        const isGameOver = gameOver
        api.updateMoves(cId, player, isGameOver)
      }
      if (apiMove === 1) {
        $('#1').text('O')
        board[1] = 'O'
        checkForWin(playerO)
        checkForTie()
        const cId = apiMove
        const player = 'O'
        const isGameOver = gameOver
        api.updateMoves(cId, player, isGameOver)
      }
      if (apiMove === 2) {
        $('#2').text('O')
        board[2] = 'O'
        checkForWin(playerO)
        checkForTie()
        const cId = apiMove
        const player = 'O'
        const isGameOver = gameOver
        api.updateMoves(cId, player, isGameOver)
      }
      if (apiMove === 3) {
        $('#3').text('O')
        board[3] = 'O'
        checkForWin(playerO)
        checkForTie()
        const cId = apiMove
        const player = 'O'
        const isGameOver = gameOver
        api.updateMoves(cId, player, isGameOver)
      }
      if (apiMove === 4) {
        $('#4').text('O')
        board[4] = 'O'
        checkForWin(playerO)
        checkForTie()
        const cId = apiMove
        const player = 'O'
        const isGameOver = gameOver
        api.updateMoves(cId, player, isGameOver)
      }
      if (apiMove === 5) {
        $('#5').text('O')
        board[5] = 'O'
        checkForWin(playerO)
        checkForTie()
        const cId = apiMove
        const player = 'O'
        const isGameOver = gameOver
        api.updateMoves(cId, player, isGameOver)
      }
      if (apiMove === 6) {
        $('#6').text('O')
        board[6] = 'O'
        checkForWin(playerO)
        checkForTie()
        const cId = apiMove
        const player = 'O'
        const isGameOver = gameOver
        api.updateMoves(cId, player, isGameOver)
      }
      if (apiMove === 7) {
        $('#7').text('O')
        board[7] = 'O'
        checkForWin(playerO)
        checkForTie()
        const cId = apiMove
        const player = 'O'
        const isGameOver = gameOver
        api.updateMoves(cId, player, isGameOver)
      }
      if (apiMove === 8) {
        $('#8').text('O')
        board[8] = 'O'
        checkForWin(playerO)
        checkForTie()
        const cId = apiMove
        const player = 'O'
        const isGameOver = gameOver
        api.updateMoves(cId, player, isGameOver)
      }
    } else {
      basicAi()
    }
  }
}

const movement = () => {
  if (aiToggle === false) {
    if (currentPlayer === playerO) {
      $(event.currentTarget).text(playerO)
      board[event.currentTarget.id] = 'O'
      checkForWin(currentPlayer)
      checkForTie()
      const cId = event.currentTarget.id
      const player = 'O'
      const isGameOver = gameOver
      api.updateMoves(cId, player, isGameOver)
      if (won === false) {
        if (aiToggle === false) {
          $('#message').text("Player X's turn.")
        }
      }
    }
  }
  if (currentPlayer === playerX) {
    $(event.currentTarget).text(playerX)
    board[event.currentTarget.id] = 'X'
    checkForWin(currentPlayer)
    checkForTie()
    if (aiToggle === true) {
      basicAi()
    }
    const cId = event.currentTarget.id
    const player = 'X'
    const isGameOver = gameOver
    api.updateMoves(cId, player, isGameOver)
    if (won === false) {
      if (aiToggle === false) {
        $('#message').text("Player O's turn.")
      }
    }
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
    if (board[combos[i][0]] === thePlayer && board[combos[i][1]] === thePlayer && board[combos[i][2]] === thePlayer) {
      $('#message').text('Player ' + thePlayer + ' has won!')
      gameOver = true
      won = true
    }
  }
}

const checkForTie = () => {
  if ($('#0').text() && $('#1').text() && $('#2').text() && $('#3').text() && $('#4').text() && $('#5').text() && $('#6').text() && $('#7').text() && $('#8').text() !== '' && won === false) {
    $('#message').text("It's a tie!")
    gameOver = true
    won = true
  }
}

const main = (event) => { // the main function checking if a cell is empty and if so runs turn movement and wincheck
  const target = $(event.target)
  if (gameOver === false) {
    if (target.text() === '') {
      movement()
      switchPlayer()
    } else {
      $('#message').text('Select an empty box.')
    }
  }
}

module.exports = {
  main,
  resetBoard,
  showGame,
  showGameAi,
  starthide
}
