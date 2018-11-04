// const setup = require('./setup.js')
// const gameObj = require('./gameObj.js')
const gui = require('./gameui.js')
const gapi = require('./gameapi.js')
const ui = require('./ui.js')

const newGame = function (event) {
  ui.wipe()
  gapi.createTTTGame()
    .then(function (data) {
      gui.onCreateSuccess(data)
    })
    .catch(ui.mainFailure)
}

const displayGames = function (event) {
  event.preventDefault()
  gapi.grabCompletedGame()
    .then(gui.onDisplayGames)
    .catch(ui.mainFailure)
}

module.exports = {
  newGame,
  displayGames
}
