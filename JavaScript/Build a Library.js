<<<<<<< HEAD

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
=======
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
      return ratingsSum / this.ratings.length
    }
  
    addRating(value) {
      this.ratings.push(value);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author
    }
    get pages() {
      return this._pages
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director
    }
  
    get runTime() {
      return this._runTime
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 554)
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.isCheckedOut)
  
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  console.log(historyOfEverything.getAverageRating())
  
  
  const speed = new Movie('Jan de Bont', 'Speed', 116)
  
  speed.toggleCheckOutStatus()
  console.log(speed.isCheckedOut)
  
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed.getAverageRating())
>>>>>>> 32476c9fb68e81451595a2f983e07b106144fa3f
