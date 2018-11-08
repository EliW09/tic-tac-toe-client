// Space for login UX and extra functions that need to be moved

const signedIn = () => {
  $('#authmessage').empty()
  $('#authmessage').removeClass()
  $('#acc').show()
  $('#theIn').show()
  $('#gamediv').show()
  $('.login-page').hide()
  let i = 0
  const main = 'Tic Tac Toe'
  const mspeed = 150
  $('#headertext').empty()
  const typeWriterHeader2 = () => {
    if (i < main.length) {
      document.getElementById('headertext').innerHTML += main.charAt(i)
      i++
      setTimeout(typeWriterHeader2, mspeed)
    }
  }
  typeWriterHeader2()

  $('.title').text('- Tic Tac Toe -')

  let titleText = document.title
  const titleMarquee = () => {
    titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1)
    document.title = titleText
    setTimeout(titleMarquee, 325)
  }
  titleMarquee()
}

const signedUp = () => {

}

const signedOut = () => {
  $('#authmessage').empty()
  $('#authmessage').removeClass()
  $('#acc').hide()
  $('#theIn').hide()
  $('#gamediv').hide()
  $('.login-page').show()
  $('.account-page').hide()
  $('#goBack').hide()
  $('.gamecontainer').hide()

  let i = 0
  const main = 'Control Panel'
  const mspeed = 150
  $('#headertext').empty()
  const typeWriterHeader3 = () => {
    if (i < main.length) {
      document.getElementById('headertext').innerHTML += main.charAt(i)
      i++
      setTimeout(typeWriterHeader3, mspeed)
    }
  }
  typeWriterHeader3()
}

module.exports = {
  signedIn,
  signedUp,
  signedOut
}
