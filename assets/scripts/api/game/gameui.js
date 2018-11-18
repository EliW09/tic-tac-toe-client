const store = require('../auth/store.js')

const onCreateSuccess = function (data) {
  store.game = {}
  store.game.id = data.game.id
  $('#message').empty()
  $('#message').text("Player X's turn.")
}

const onDisplayGames = function (data) {
  $('#message').text(`${data.games.length} games have been completed on your account!`)
}

module.exports = {
  onCreateSuccess,
  onDisplayGames
}
