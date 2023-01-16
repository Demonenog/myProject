const board = document.querySelector('#board')
const colors = ['#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#FF00FF', '#FF4500', '#00ffff', '#800000', '#FFFF00', '#2F4F4F']
const SQUARES_NUMBER = 2000

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 5px ${color}, 0 0 20px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 5px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}