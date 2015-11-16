var extend = require('extend');
var Weapon = require('./weapon');
var utilities = require('./utilities');

// Enemy Options
// name
// health
// weapon

function Enemy(settings){
  var self = this,
    defaults = {
      name: "Spider",
      type: "spider",
      health: 100,
      weapon: new Weapon()
    };

  extend(self, defaults, settings);
}

Enemy.prototype.equipWeapon = function(weapon){
  // Add logic to check if weapon can be equipped
  // and if there is an existing weapon, put it
  // somewhere else

  this.weapon = weapon;
};

Enemy.prototype.attack = function(object){
  var damage = utilities.calculateDamage(this, object);

  object.damage(damage);
};

Enemy.prototype.damage = function(damage){
  this.health -= damage;
};

Enemy.prototype.isAlive = function(){
  return this.health > 0;
};


module.exports = Enemy;
