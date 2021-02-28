/* particles.js - https://github.com/VincentGarreau/particles.js */
particlesJS.load('particles-js', 'assets/particlesjs.json', function () {
  console.log('callback - particles.js config loaded');
});

const sequecie = [0, 1, 2, 9, 10, 11, 18, 19, 20, 3, 4, 5, 12, 13, 14, 21, 22, 23, 6, 7, 8, 15, 16, 17, 24, 25, 26, 27, 28, 29, 36, 37, 38, 45, 46, 47, 30, 31, 32, 39, 40, 41, 48, 49, 50, 33, 34, 35, 42, 43, 44, 51, 52, 53, 54, 55, 56, 63, 64, 65, 72, 73, 74, 57, 58, 59, 66, 67, 68, 75, 76, 77, 60, 61, 62, 69, 70, 71, 78, 79, 80]

function checkAnswer() {
  const allInputs = Array.from(document.querySelectorAll('input'))

  const valuesFilled = allInputs.map(i => i.value)

  if (valuesFilled.filter(v => v === '').length === 0) {
    const solution = localStorage.getItem('solution')
    const valuesSerialized = sequecie.map(s => valuesFilled[s]).join('')
    console.log(solution);
    console.log(valuesSerialized);
    if (solution === valuesSerialized)
      document.getElementById('success').style.display = 'flex'
  }
}

/* sudoku.js - https://github.com/robatron/sudoku.js */
function generateNewGame(level) {
  const gameset_string = sudoku.generate(level)

  const gameset_array = gameset_string.split('')

  const allInputs = Array.from(document.querySelectorAll('input'))

  sequecie.forEach((idx, i) => {
    const input = allInputs[idx]
    input.value = gameset_array[i]
    if (gameset_array[i] !== '.') input.disabled = true

    input.addEventListener('input', checkAnswer)
  })


  localStorage.setItem('gameset', gameset_string)
  localStorage.setItem('solution', sudoku.solve(gameset_string))

  // sudoku.print_board(gameset_string)
  // sudoku.print_board(sudoku.solve(gameset_string))
}

generateNewGame('medium')
