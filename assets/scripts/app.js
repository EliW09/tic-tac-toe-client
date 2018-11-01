'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events')

$(() => {
  $('#0').on('click', events.trying)
  $('#1').on('click', events.trying)
  $('#2').on('click', events.trying)
  $('#3').on('click', events.trying)
  $('#4').on('click', events.trying)
  $('#5').on('click', events.trying)
  $('#6').on('click', events.trying)
  $('#7').on('click', events.trying)
  $('#8').on('click', events.trying)
})
