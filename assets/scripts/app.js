'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events')

$(() => {
  $('#box1').on('click', events.trying)
  $('#box2').on('click', events.trying)
  $('#box3').on('click', events.trying)
  $('#box4').on('click', events.trying)
  $('#box5').on('click', events.trying)
  $('#box6').on('click', events.trying)
  $('#box7').on('click', events.trying)
  $('#box8').on('click', events.trying)
  $('#box9').on('click', events.trying)
})
