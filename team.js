var extend = require('extend');

var MAX_PLAYERS = 4;

// Team Options
// name
// players

function Team(settings){
  var self = this,
    defaults = {
      name: "Team",
      players: []
    };

  extend(self, settings, defaults);
}

Team.prototype.addPlayer = function(player){
  if(this.players.length < MAX_PLAYERS){
    this.players.push(player);
  } else {
    console.log("Max players reached for " + this.name);
  }
};

module.exports = Team;
