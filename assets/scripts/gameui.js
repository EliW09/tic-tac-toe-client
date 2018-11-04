const store = require('./store.js')

const onCreateSuccess = function (data) {
  store.game = {}
  store.game.id = data.game.id
  $('#message').empty()
}

const onDisplayGames = function (data) {
  $('#message').text(`${data.games.length} games have been completed on your account!`)
}

module.exports = {
  onCreateSuccess,
  onDisplayGames
}
