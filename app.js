const btn = document.getElementById('btn')
const r = document.getElementById('result')
const allResults = ['yes', 'no', 'maybe']
const again = document.getElementById('again')
// const outputResult = document.getElementById('outputResult')

const range = 3
btn.addEventListener('click', function () {
  let rnd = Math.floor(Math.random() * range)
  //   outputResult.value = rnd
  btn.style.display = 'none'
  btn.style.margin = '5px auto'
  again.style.margin = '5px auto'

  r.textContent = allResults[rnd]
  again.style.display = 'block'
})

again.addEventListener('click', () => {
  r.textContent = ''
  again.style.display = 'none'
  btn.style.display = 'block'
})
