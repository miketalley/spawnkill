var Team = require('./team');
var Player = require('./player');
var Weapon = require('./weapon');

var team1 = new Team({
  name: "Team1"
});
var player1 = new Player({
  name: "Player1"
});

var team2 = new Team({
  name: "Team2"
});
var player2 = new Player({
  name: "Player2"
});

team1.addPlayer(player1);
team2.addPlayer(player2);

console.log(team1, team2);
