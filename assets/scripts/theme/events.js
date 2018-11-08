const store = require('../api/auth/store.js')

const signedIn = () => {
  $('#acc').hide()
  $('#goBack').show()
  $('.account-page').show()
  $('#gamediv').hide()
  $('#accemail').empty()
  $('#accemail').text(`Email: ${store.email}`)
}

const signedInDone = () => {
  $('#acc').show()
  $('#goBack').hide()
  $('.account-page').hide()
  $('#gamediv').show()
}

module.exports = {
  signedIn,
  signedInDone
}
