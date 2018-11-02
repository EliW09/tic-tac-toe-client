'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events')
const authEvents = require('./authevents.js')
const siteEvents = require('./siteevents.js')

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

  $('#inbtn').on('click', siteEvents.runLogIn)
  $('#outbtn').on('click', authEvents.onSignOut)
  $('#regbtn').on('click', siteEvents.runRegisterAcc)
  $('#chgbtn').on('click', siteEvents.runChangePass)

  $('#resetbtn').on('click', events.resetBoard)
})
