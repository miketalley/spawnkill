var extend = require('extend');

// Level Options
// element
// enemies

function Level(settings){
  var self = this,
    defaults = {
      element: "fire",
      enemies: []
    };

  extend(self, defaults, settings);
}

Level.prototype.addEnemy = function(enemy){
  this.enemies.push(enemy);
};

module.exports = Level;
