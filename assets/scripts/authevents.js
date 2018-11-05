const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = (event) => {
  $('#signupform').hide()
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  $('#signinform').hide()
  $('#startbtn').show()
  $('#resetbtn').show()
  $('#allgame').show()
  $('#inbtn').hide()
  $('#regbtn').hide()
  $('#outbtn').show()
  $('#chgbtn').show()
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = (event) => {
  $('#signoutform').hide()
  $('.gamecontainer').hide()
  $('#startbtn').hide()
  $('#resetbtn').hide()
  $('#allgame').hide()
  $('#inbtn').show()
  $('#regbtn').show()
  $('#outbtn').hide()
  $('#chgbtn').hide()
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = (event) => {
  $('#changepassform').hide()
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
