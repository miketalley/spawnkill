var extend = require('extend');
var Level = require('./level');
var _ = require('lodash');

// Dungeon Options
// name
// teams
// levels
// currentLevel

function Dungeon(settings){
  var self = this,
    defaults = {
      name: "Dungeon",
      team: null,
      levels: [],
      currentLevel: null,
      levelsPerDungeon: 1,
      levelSettings: {}
    };

  extend(self, defaults, settings);

  self.addLevels(self.levelsPerDungeon);
}

Dungeon.prototype.addTeam = function(team){
  this.team = team;
};

Dungeon.prototype.addLevels = function(numLevels){
  var self = this;

  _.times(numLevels, function(x){
    var newLevel = new Level(self.levelSettings);

    self.levels.push(newLevel);
  });
};

Dungeon.prototype.goToNextLevel = function(){
  this.currentLevel = this.currentLevel ? this.currentLevel + 1 : 1;
};

Dungeon.prototype.complete = function(){
  var indexOfCurrentLevel = this.currentLevel - 1;

  indexOfCurrentLevel === this.levels.length && this.levels[indexOfCurrentLevel].isComplete;
};

module.exports = Dungeon;
