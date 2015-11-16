var extend = require('extend');

// Weapon Options
// name
// type -- sword, axe, hammer, staff, bow
// element -- fire, electric, acid, ice, piercing, bludgeoning, slashing
// minimumDamage
// maximumDamage
// speed

function Weapon(settings){
  var self = this,
    defaults = {
      name: "Sword",
      type: "sword",
      element: "fire",
      minimumDamage: 1,
      maximumDamage: 5,
      speed: 10
    };

  extend(self, defaults, settings);
}

module.exports = Weapon;
