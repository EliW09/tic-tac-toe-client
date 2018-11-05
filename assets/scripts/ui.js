const store = require('./store.js')

const signUpSuccess = data => {
  $('#message').empty()
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up')[0].reset()
}

const signUpFailure = error => {
  $('#message').empty()
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-up')[0].reset()
}

const signInSuccess = data => {
  $('#message').empty()
  $('#welcome').empty()
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  const getEmail = data.user.email
  const theEmail = getEmail.substring(0, getEmail.indexOf('@'))
  $('#welcome').text('Welcome back, ' + theEmail)
  $('#sign-in')[0].reset()
}

const signInFailure = error => {
  $('#message').empty()
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = data => {
  $('#message').empty()
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-password')[0].reset()
}

const changePasswordFailure = error => {
  $('#message').empty()
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#change-password')[0].reset()
}

const signOutSuccess = data => {
  $('#message').empty()
  $('#welcome').empty()
  $('#message').text('Signed out successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-out')[0].reset()
}

const signOutFailure = error => {
  $('#message').empty()
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-out')[0].reset()
}

const mainFailure = error => {
  $('#message').empty()
  $('#message').text("Can't reach server")
}

const wipe = () => {
  $('#message').empty()
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
  mainFailure,
  wipe
}
