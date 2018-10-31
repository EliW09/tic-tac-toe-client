const box1Stuff = (event) => {
  $('#box1').text('X')
}

const box2Stuff = (event) => {
  $('#box2').text('O')
}

const box3Stuff = (event) => {
  $('#box3').text('X')
}

const box4Stuff = (event) => {
  $('#box4').text('O')
}

const box5Stuff = (event) => {
  $('#box5').text('X')
}

const box6Stuff = (event) => {
  $('#box6').text('O')
}

const box7Stuff = (event) => {
  $('#box7').text('X')
}

const box8Stuff = (event) => {
  $('#box8').text('O')
}

const box9Stuff = (event) => {
  $('#box9').text('X')
}

const trying = (event) => {
  for (let i = 0; i <= 9; i++) {
    if (i === 0) {
      $(event.currentTarget).text('X')
    } else {
      console.log('fail')
      // $(event.currentTarget).text('O')
    }
  }
}

module.exports = {
  box1Stuff,
  box2Stuff,
  box3Stuff,
  box4Stuff,
  box5Stuff,
  box6Stuff,
  box7Stuff,
  box8Stuff,
  box9Stuff,
  trying
}
