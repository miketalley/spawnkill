var extend = require('extend');
var Weapon = require('./weapon');
var utilities = require('./utilities');

// Player Options
// name
// health
// weapon

function Player(settings){
  var self = this,
    defaults = {
      name: "Player",
      health: 100,
      weapon: new Weapon()
    };

  extend(self, defaults, settings);
}

Player.prototype.equipWeapon = function(weapon){
  // Add logic to check if weapon can be equipped
  // and if there is an existing weapon, put it
  // somewhere else

  this.weapon = weapon;
};

Player.prototype.attack = function(object){
  var damage = utilities.calculateDamage(this, object);

  object.damage(damage);
};

Player.prototype.damage = function(damage){
  this.health -= damage;
};

Player.prototype.isAlive = function(){
  return this.health > 0;
};


module.exports = Player;
