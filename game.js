var extend = require('extend');
var Team = require('./team');
var Player = require('./player');
var Dungeon = require('./dungeon');
var _ = require('lodash');

// Game Options
// name
// dungeons

function Game(settings){
  var self = this,
    defaults = {
      name: "Game",
      dungeons: [],
      teams: [],
      levelsPerDungeon: 1,
      numTeams: 2,
      playersPerTeam: 1
    };

  extend(self, defaults, settings);
}

Game.prototype.setup = function(){
  this.createTeams(this.numTeams);
};

Game.prototype.start = function(){

};

Game.prototype.createDungeon = function(team){
  var dungeon = new Dungeon();

  dungeon.addTeam(team);

  this.dungeons.push(dungeon);
};

Game.prototype.createTeams = function(teamsToCreate){
  var self = this;

  _.times(teamsToCreate, function(x){
    var newTeam = new Team({
      name: "Team" + x
    });

    self.addPlayersToTeam(newTeam);
    self.teams.push(newTeam);
    self.createDungeon(newTeam);
  });
};

Game.prototype.addPlayersToTeam = function(team){
  _.times(this.playersPerTeam, function(y){
    var newPlayer = new Player({
      name: "Player" + y
    });

    team.players.push(newPlayer);
  });
};

module.exports = Game;
