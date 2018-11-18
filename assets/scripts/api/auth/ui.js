const store = require('./store.js')
const eF = require('./extrafunctions.js')

const signUpSuccess = data => {
  eF.signedUp()
  $('#message').empty()
  $('#message').removeClass()
  $('#authmessage').empty()
  $('#authmessage').text('Account Created!')
  $('#sign-up')[0].reset()
}

const signUpFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on sign up')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('#sign-up')[0].reset()
}

const signInSuccess = data => {
  eF.signedIn()
  $('#message').empty()
  $('#welcome').empty()
  $('#authmessage').empty()
  store.user = data.user
  $('#message').removeClass()
  const getEmail = data.user.email
  const theEmail = getEmail.substring(0, getEmail.indexOf('@'))
  store.email = data.user.email
  const welcome = `Welcome back, ${theEmail}`

  let i = 0
  const wspeed = 200

  const typeWriterWelcome = (theEmail) => {
    if (i < welcome.length) {
      document.getElementById('welcome').innerHTML += welcome.charAt(i)
      i++
      setTimeout(typeWriterWelcome, wspeed)
    }
  }
  typeWriterWelcome(theEmail)

  $('#sign-in')[0].reset()
}

const signInFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on sign in')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = data => {
  $('#message').empty()
  $('#authmessage').text('Password changed')
  $('#message').removeClass()
}

const changePasswordFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on password change')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  // $('#change-password')[0].reset()
}

const signOutSuccess = data => {
  eF.signedOut()
  $('#message').empty()
  $('#welcome').empty()
  store.user = null
  $('#message').removeClass()
  // $('#sign-out')[0].reset()
}

const signOutFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on sign out')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  // $('#sign-out')[0].reset()
}

const mainFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text("Can't reach server")
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  mainFailure
}
