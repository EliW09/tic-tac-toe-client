let i = 0
const main = 'Control Panel'
const mspeed = 150

const typeWriterHeader = () => {
  if (i < main.length) {
    document.getElementById('headertext').innerHTML += main.charAt(i)
    i++
    setTimeout(typeWriterHeader, mspeed)
  }
}

module.exports = {
  typeWriterHeader
}
