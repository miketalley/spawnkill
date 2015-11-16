var extend = require('extend');

// Level Options
// element
// enemies

function Level(settings){
  var self = this,
    defaults = {
      element: "fire",
      enemies: [],
      team: null
    };

  extend(self, defaults, settings);
}

Level.prototype.addEnemy = function(enemy){
  this.enemies.push(enemy);
};

Level.prototype.isComplete = function(){
  var livingEnemies = this.enemies.filter(function(enemy){
    return enemy.isAlive;
  });

  return this.team && this.enemies && livingEnemies.length === 0;
};

module.exports = Level;
