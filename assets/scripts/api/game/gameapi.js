const config = require('../auth/config.js')
const store = require('../auth/store.js')

const createTTTGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateMoves = (index, value, over) => {
  const game = {
    'game': {
      'cell': {
        'index': index,
        'value': value
      },
      'over': over
    }
  }
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: JSON.stringify(game)
  })
}

const grabCompletedGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games?over=true',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createTTTGame,
  updateMoves,
  grabCompletedGame
}
