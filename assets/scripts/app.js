'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events')
const authEvents = require('./api/auth/authevents.js')
// const siteEvents = require('./api/auth/siteevents.js')
const gEvents = require('./api/game/gameevents.js')
const canMatrix = require('./theme/matrix.js')
const cusFont = require('./theme/cusfont.js')
const themeE = require('./theme/events.js')

$(() => {
  $('#0').on('click', events.main)
  $('#1').on('click', events.main)
  $('#2').on('click', events.main)
  $('#3').on('click', events.main)
  $('#4').on('click', events.main)
  $('#5').on('click', events.main)
  $('#6').on('click', events.main)
  $('#7').on('click', events.main)
  $('#8').on('click', events.main)

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#startbtn').on('click', events.showGame)
  $('#startbtn2').on('click', events.showGameAi)
  $('#allgame').on('click', gEvents.displayGames)

  $('.message a').click(function () {
    $('form').animate({height: 'toggle', opacity: 'toggle'}, 'slow')
  })

  $('#theBG').on('click', canMatrix.theBack)

  $(document).ready(canMatrix.draw)
  $(document).ready(cusFont.typeWriterHeader)

  $(document).ready(events.starthide)

  $('#acc').on('click', themeE.signedIn)
  $('#goBack').on('click', themeE.signedInDone)

  $('#navbar li').click(function () {
    $(this).addClass('active').siblings('li').removeClass('active')
  })
})
