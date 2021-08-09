const prompt = require('prompt-sync')({ sigint: true });

// Game title
const title = "Welcome to 'Find your hat'"
console.log(title)

// Game preferences
const nameResponse = prompt('Player name:')
const difficultyResponse = prompt('Set difficulty ([1] Easy [2] Normal[3] Medium [4] Harder [5] Extreme):')
const name = setName(nameResponse)
const difficulty = setDifficulty(difficultyResponse)

// Show controls
const controls = `
Controls:
  [w] Move north
  [a] Move west
  [s] Move south
  [d] Move east
  [Enter] Submit
`
console.log(controls)

// Prompt ready
const response = prompt('Press [Enter] if you are ready!')
response === '^C' ? hasHat = -1 : console.clear()

// Story
const story = 'After a fun excursion, you realize that you have lost your hat! You must go look for it without falling into the holes. Good luck!'
console.log(story)

// Field parameters
const width = difficulty * 15
const holeThreshold = setHoleThreshold(difficulty)

// Generate map
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const map = generateMap(width, holeThreshold)
const legend = `
  [*] Your path
  [^] Your hat
`

// Player moves 
let hasHat = false
let playerPosX = 0
let playerPosY = 0

while (!hasHat) {
  // Render map on each move
  console.clear()
  printMap(map, legend)

  const move = prompt('Which direction?:')
  switch (move) {
    // Updates player position
    case 'w':
      playerPosX -= 1
      break;
    case 'a':
      playerPosY -= 1
      break;
    case 's':
      playerPosX += 1
      break;
    case 'd':
      playerPosY += 1
      break;
    default:
      console.log(`Invalid input, these are the controls: ${controls}`)
      prompt('Press [Enter] to continue')
  }
}

const characterAtPlayerPos = map[playerPosX][playerPosY] || undefined
if (!characterAtPlayerPos) {
  // Game over when player leaves the map
  console.log(`
          **GAME OVER**
          ${name} left the field to buy a new hat!
        `)
  hasHat = -1
} else {
  switch (characterAtPlayerPos) {
    case hole:
      // Game over when player fells into a hole
      console.log(`
          **GAME OVER**
          ${name} fell into a hole, we hope you can get out soon!
          A passer-by scores a new hat...
        `)
      hasHat = -1
      break;
    case hat:
      // Game end when character at player position is hat
      console.log(`
        **YOU FOUND YOUR HAT!**
        The name of ${name} now is a part of the history! 
        `)
      hasHat = true
      break;
    default:
      // Update map with the last move
      map[playerPosX][playerPosY] = path
  }
}

// Functions
function printMap(map, legend) {
  map.forEach(row => console.log(row.join("")))
  console.log(legend)
}

function generateMap(width, holeThreshold) {
  const map = []

  // Locate grass and holes
  while (map.length < width) {
    const row = []
    while (row.length < width) {
      row.push(Math.random() >= holeThreshold ? grass : hole)
    }
    map.push(row)
  }

  // Locate hat
  const hatRowIndex = getRandomInt(width)
  const hatColIndex = getRandomInt(width)
  map[hatRowIndex][hatColIndex] = hat

  // Start position
  map[0][0] = path

  // Ensure holes don't surround start position
  map[0][1] = map[1][0] = map[1][1] = grass

  return map
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function setHoleThreshold(difficulty) {
  switch (difficulty) {
    case 1:
      return 0.2
    case 2:
      return 0.225
    case 3:
      return 0.25
    case 4:
      return 0.275
    case 5:
      return 0.3
  }
}

function setDifficulty(num) {
  return (num === "1" || num === "5")
    ? parseInt(num)
    : 2
}

function setName(str) {
  const regex = /[a-z]/gi
  const letters = str.match(regex)
  if (letters) {
    letters[0] = letters[0].toUpperCase()
    return letters.join("")
  } else return "Player 1"
}