var Team = require('./team');
var Player = require('./player');
var Weapon = require('./weapon');

var team1 = new Team();
var player1 = new Player();
var sword = new Weapon();

player1.equipWeapon(sword);
team1.addPlayer(player1);
