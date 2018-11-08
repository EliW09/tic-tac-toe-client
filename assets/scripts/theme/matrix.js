const can = document.getElementById('can')
const ctx = can.getContext('2d')

let allow = true

can.height = window.innerHeight
can.width = window.innerWidth

let allFont = '1234567890!@#$%^&*-=+QWERTYUIOPASDFGHJKLZXCVBNM'
allFont = allFont.split('')

const fontSize = 10
const columns = can.width / fontSize

const drops = []

for (let x = 0; x < columns; x++) {
  drops[x] = 1
}

const draw = () => {
  if (allow === true) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
    ctx.fillRect(0, 0, can.width, can.height)
    ctx.fillStyle = '#0F0'
    ctx.font = fontSize + 'px arial'
    for (let i = 0; i < drops.length; i++) {
      const text = allFont[Math.floor(Math.random() * allFont.length)]

      ctx.fillText(text, i * fontSize, drops[i] * fontSize)

      if (drops[i] * fontSize > can.height && Math.random() > 0.975) {
        drops[i] = 0
      }

      drops[i]++
    }
  }
}

const theBack = () => {
  if (allow === true) {
    allow = false
  } else {
    allow = true
  }
}

setInterval(draw, 33)

module.exports = {
  draw,
  theBack
}
