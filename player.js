var extend = require('extend');

// Player Options
// name
// health
// weapon

function Player(settings){
  var self = this,
    defaults = {
      name: "Player",
      health: 100,
      weapon: null
    };

  extend(self, settings, defaults);

  function calculateDamage(){
    var min = self.weapon && self.weapon.minimumDamage || 0,
      max = self.weapon && self.weapon.maximumDamage || 0;

    return Math.random() * (max - min) + min;
  }
}

Player.prototype.equipWeapon = function(weapon){
  // Add logic to check if weapon can be equipped
  // and if there is an existing weapon, put it
  // somewhere else

  this.weapon = weapon;
};

Player.prototype.attack = function(object){
  var damage = calculateDamage();

  object.damage(damage);
};


module.exports = Player;
