const team = {
  _players: [
    {
    firstName: "I don't like sports",
    lastName: "...",
    age: 5
  },
  {
    firstName: 'Bueno',
    lastName: 'A poner algo',
    age: 10
  },
  {
    firstName: 'Alguien',
    lastName: 'Que hace bien algo',
    age: 15
  }
],
  _games: [
    {
      opponent: "I don't care",
      teamPoints: 5,
      opponentPoints: 10
    },
    {
      opponent: 'Otro más',
      teamPoints: 15,
      opponentPoints: 20
    },
    {
      opponent: 'Último oponente :D',
      teamPoints: 25,
      opponentPoints: 30
    }
  ],
  get players () {
    return this._players;
  },
  get games () {
    return this._games
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    };
    this.players.push(player);
  },
  addGame(name, teamPoints, opponentPoints){
    let game = {
      name,
      teamPoints,
      opponentPoints
    }
    this.games.push(game)
  },
};
team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

console.log(team._players)

team.addGame('Why', 35, 40)

console.log(team._games)