'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events')

$(() => {
  $('#box1').on('click', events.box1Stuff)
  $('#box2').on('click', events.box2Stuff)
  $('#box3').on('click', events.box3Stuff)
  $('#box4').on('click', events.box4Stuff)
  $('#box5').on('click', events.box5Stuff)
  $('#box6').on('click', events.box6Stuff)
  $('#box7').on('click', events.box7Stuff)
  $('#box8').on('click', events.box8Stuff)
  $('#box9').on('click', events.box9Stuff)
})
