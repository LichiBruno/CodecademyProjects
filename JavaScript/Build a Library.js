
// FUNCTIONS -----------------------------------------------
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

  // Locate start position
  map[0][0] = path

  // Ensure holes don't surround start position
  map[0][1] = map[1][0] = map[1][1] = grass

  return map
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function setHoleThreshold(difficulty) {
  switch(difficulty) {
    case 1:
      return 0.2
    case 2:
      return 0.225
    case 3:
      return 0.25
  }
}

function setDifficulty(num) {
  return (num === "1" || num === "3")
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